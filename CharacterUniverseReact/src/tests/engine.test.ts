import { describe, it, expect } from 'vitest';
import { activeCharacters } from '../data/characters';
import { activePoses } from '../data/poses';
import { getVisibleCharacters } from '../engine/characterSource';
import { isGenderCompatiblePose, isPoseCompatibleWithCharacterItem } from '../engine/poseFilterEngine';
import { buildPrompt } from '../engine/promptBuilder';

describe('Engine Logic', () => {
  const maleChar = activeCharacters.find(c => c.gender === 'male' && c.personalItem?.itemRole === 'weapon');
  const femaleChar = activeCharacters.find(c => c.gender === 'female' && c.personalItem?.itemRole === 'weapon');
  const nonWeaponMale = activeCharacters.find(c => c.gender === 'male' && c.personalItem?.itemRole !== 'weapon' && c.personalItem?.itemRole !== 'none');

  const cameraGlamourPose = activePoses.find(p => p.uiCategory === 'camera_driven_glamour' || p.category === 'glamour_showcase');
  const combatAttackPose = activePoses.find(p => p.category === 'combat_attack' || p.subcategory === 'active_attack');

  it('should find matching characters by search', () => {
    const chars = getVisibleCharacters({ search: maleChar!.name, factionId: 'all', gender: 'all', role: 'all' });
    expect(chars.length).toBeGreaterThan(0);
    expect(chars[0].id).toBe(maleChar!.id);
  });

  it('male characters cannot see female-only glamour/body/camera poses', () => {
    if (cameraGlamourPose) {
      expect(isGenderCompatiblePose(cameraGlamourPose, maleChar)).toBe(false);
      expect(isGenderCompatiblePose(cameraGlamourPose, femaleChar)).toBe(true);
    }
  });

  it('non-weapon characters do not see active weapon attack poses', () => {
    if (combatAttackPose && nonWeaponMale) {
      expect(isPoseCompatibleWithCharacterItem(combatAttackPose, nonWeaponMale, 'with_item')).toBe(false);
    }
  });

  it('weapon characters still see valid weapon poses', () => {
    if (combatAttackPose && maleChar) {
      expect(isPoseCompatibleWithCharacterItem(combatAttackPose, maleChar, 'with_item')).toBe(true);
    }
  });

  it('prompt generation handles no_item mode correctly', () => {
     const prompt = buildPrompt(maleChar, activePoses[0], 'no_item', 'dark_luxury', true);
     expect(prompt.positive).toContain('Selected pose:');
     expect(prompt.negative).toContain('unwanted extra weapon');
  });
});
