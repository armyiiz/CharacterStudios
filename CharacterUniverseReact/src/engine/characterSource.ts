import { activeCharacters, characterFactions } from '../data';
import { characterSearchRank, inferGender } from './characterUtils';

export function getAllCharacters() {
  return activeCharacters as any[];
}

export function getAllFactions() {
  return characterFactions as any[];
}

export function getVisibleCharacters(filters: { search: string, factionId: string, gender: string, role: string }) {
  const characters = getAllCharacters();
  const searchLower = (filters.search || '').toLowerCase();

  const filtered = characters.filter(char => {
    if (searchLower) {
      const matchName = char.name?.toLowerCase().includes(searchLower);
      const matchTitle = char.title?.toLowerCase().includes(searchLower);
      const matchId = String(char.id).toLowerCase().includes(searchLower);
      const matchDisplayName = char.displayName?.toLowerCase().includes(searchLower);
      if (!matchName && !matchTitle && !matchId && !matchDisplayName) return false;
    }

    if (filters.factionId && filters.factionId !== 'all') {
      const fid = char.factionId || char.f;
      if (String(fid) !== String(filters.factionId)) return false;
    }

    if (filters.gender && filters.gender !== 'all') {
      if (inferGender(char) !== filters.gender) return false;
    }

    if (filters.role && filters.role !== 'all') {
      if (filters.role === 'weapon') {
        if (char?.personalItem?.itemRole !== 'weapon') return false;
      } else if (filters.role === 'non_weapon') {
        if (!char?.personalItem?.itemRole || char.personalItem.itemRole === 'weapon' || char.personalItem.itemRole === 'none') return false;
      } else if (filters.role === 'none') {
        if (char?.personalItem?.itemRole && char.personalItem.itemRole !== 'none') return false;
      }
    }

    return true;
  });

  if (!searchLower) return filtered;
  return filtered.sort((a, b) => characterSearchRank(a, searchLower) - characterSearchRank(b, searchLower));
}
