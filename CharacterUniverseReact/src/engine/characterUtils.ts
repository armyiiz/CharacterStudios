export function inferGender(c: any): string {
  if (!c) return 'unknown';
  const g = String(c.gender || '').toLowerCase();
  if (g.includes('female')) return 'female';
  if (g.includes('male')) return 'male';
  if (g.includes('other')) return 'other';
  const blob = [c.name, c.title, c.displayName, c.characterCore?.face, c.characterCore?.body].filter(Boolean).join(' ').toLowerCase();
  if (/female|woman|girl|heroine|queen|princess|priestess|goddess|maid|villainess|lady\b/.test(blob)) return 'female';
  if (/male|man|boy|gentleman|handsome|captain|king\b/.test(blob)) return 'male';
  return 'unknown';
}

export function inferRole(c: any): string {
  const mode = c?.presentationMode || '';
  const item = c?.personalItem?.itemRole || '';
  const tags = (c?.tags || []).join('\n');
  if (mode === 'combat' || item === 'weapon') return 'combat';
  if (['lifestyle','travel','royal','regal','glamour'].includes(mode) || ['daily_item','accessory_item','travel_item','prop'].includes(item)) return 'lifestyle';
  if (['scholar','scholarly','professional'].includes(mode) || ['document_item','tool_item'].includes(item)) return 'scholarly';
  if (['ceremonial','mystic','support'].includes(mode) || ['ritual_item','instrument_item'].includes(item)) return 'ritual';
  if (/void|dimension|curse|blood|time|memory|aura|floating|magic/.test(tags)) return 'magic';
  return 'other';
}

export function genderLabel(g: string): string {
  return ({ all: 'ทุกเพศ', female: 'Female', male: 'Male', other: 'Other', unknown: 'Unknown' } as any)[g] || g;
}

export function roleLabel(r: string): string {
  return ({ all: 'ทุก Role', combat: 'Combat', lifestyle: 'Lifestyle / Noble', scholarly: 'Scholar / Pro', ritual: 'Ritual / Mystic', magic: 'Magic / Effect', other: 'Other' } as any)[r] || r;
}

export function characterSearchRank(c: any, q: string): number {
  const name = (c.name || '').toLowerCase();
  const title = (c.title || '').toLowerCase();
  const displayName = (c.displayName || '').toLowerCase();
  if (name === q) return 0;
  if (displayName === q) return 1;
  if (title === q) return 2;
  if (name.startsWith(q)) return 3;
  if (displayName.startsWith(q)) return 4;
  if (title.startsWith(q)) return 5;
  if (name.includes(q)) return 6;
  if (displayName.includes(q)) return 7;
  if (title.includes(q)) return 8;
  return 9;
}

export function schemaHasToggleItem(c: any): boolean {
  const item = c?.personalItem;
  return !!(item && item.itemRole && item.itemRole !== 'none' && item.itemFamily !== 'none' && (item.name || item.description || item.withItemPrompt));
}
