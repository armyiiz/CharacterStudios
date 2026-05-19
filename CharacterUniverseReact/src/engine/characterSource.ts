import { activeCharacters, characterFactions } from '../data';

export function getAllCharacters() {
  return activeCharacters as any[];
}

export function getAllFactions() {
  return characterFactions as any[];
}

export function getVisibleCharacters(filters: { search: string, factionId: string, gender: string, role: string }) {
  const characters = getAllCharacters();
  const searchLower = (filters.search || '').toLowerCase();

  return characters.filter(char => {
    if (searchLower) {
      const matchName = char.name?.toLowerCase().includes(searchLower);
      const matchTitle = char.title?.toLowerCase().includes(searchLower);
      const matchId = String(char.id).toLowerCase().includes(searchLower);
      if (!matchName && !matchTitle && !matchId) return false;
    }

    if (filters.factionId && filters.factionId !== 'all') {
      const fid = char.factionId || char.f;
      if (String(fid) !== String(filters.factionId)) return false;
    }

    if (filters.gender && filters.gender !== 'all') {
      if (String(char.gender).toLowerCase() !== String(filters.gender).toLowerCase()) return false;
    }

    if (filters.role && filters.role !== 'all') {
      const isWeapon = char?.personalItem?.itemRole === 'weapon';
      if (filters.role === 'weapon' && !isWeapon) return false;
      if (filters.role === 'non_weapon' && isWeapon) return false;
      if (filters.role === 'none' && char?.personalItem?.itemRole !== 'none') return false;
    }

    return true;
  });
}
