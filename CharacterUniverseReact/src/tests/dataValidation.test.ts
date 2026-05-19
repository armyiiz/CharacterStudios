import { describe, it, expect } from 'vitest';
import { activeCharacters } from '../data/characters';
import { activePoses } from '../data/poses';

describe('Data Validation', () => {
  it('should have exactly 685 active characters', () => {
    expect(activeCharacters.length).toBe(685);
  });

  it('should have exactly 279 active poses', () => {
    expect(activePoses.length).toBe(279);
  });

  it('should have no duplicate character IDs', () => {
    const ids = activeCharacters.map(c => c.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should have no duplicate character names', () => {
    const names = activeCharacters.map(c => c.name);
    const uniqueNames = new Set(names);
    expect(uniqueNames.size).toBe(names.length);
  });

  it('should have no duplicate pose IDs', () => {
    const ids = activePoses.map(p => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});
