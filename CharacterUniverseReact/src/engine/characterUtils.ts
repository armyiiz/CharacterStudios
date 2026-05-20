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

export interface Faction {
  id: string;
  name: string;
  thaiName: string;
  icon: string;
}

export const FACTION_MAP: Record<string, Faction> = {
  "Guardians of Eden": { id: "guardians_of_eden", name: "Guardians of Eden", thaiName: "ผู้พิทักษ์แห่งเอเดน", icon: "🛡️" },
  "Eden (Villains)": { id: "eden_villains", name: "Eden (Villains)", thaiName: "ฝ่ายต่อต้านแห่งเอเดน", icon: "😈" },
  "9 ผู้บัญชาการเงา": { id: "9_shadow_commanders", name: "9 Shadow Commanders", thaiName: "เก้าผู้บัญชาการเงา", icon: "👥" },
  "6 กัปตันรุ่งอรุณ": { id: "6_dawn_captains", name: "6 Dawn Captains", thaiName: "หกกัปตันรุ่งอรุณ", icon: "🌅" },
  "The Last Dawn": { id: "the_last_dawn", name: "The Last Dawn", thaiName: "กลุ่มรุ่งอรุณสุดท้าย", icon: "🌄" },
  "8 Sword Maidens": { id: "8_sword_maidens", name: "8 Sword Maidens", thaiName: "แปดธิดาแห่งดาบ", icon: "⚔️" },
  "มังกรโบราณ": { id: "ancient_dragons", name: "Ancient Dragons", thaiName: "เก้าอวตารมังกรโบราณ", icon: "🐉" },
  "6 กัปตันหายนะ": { id: "6_calamity_captains", name: "6 Calamity Captains", thaiName: "หกกัปตันแห่งหายนะ", icon: "☄️" },
  "9. สภาหอนาฬิกาดารา": { id: "9_star_clock_council", name: "9 Star Clock Council", thaiName: "สภาหอนาฬิกาดารา", icon: "⏰" },
  "10. ผู้คุมกฎกุหลาบเลือด": { id: "10_blood_rose_arbiters", name: "10 Blood Rose Arbiters", thaiName: "ผู้คุมกฎกุหลาบเลือด", icon: "🌹" },
  "11. คณะอุปรากรมายา": { id: "11_illusion_opera", name: "11 Illusion Opera", thaiName: "คณะอุปรากรมายา", icon: "🎭" },
  "ผู้เดินทางข้ามมิติ": { id: "dimension_travelers", name: "Dimension Travelers", thaiName: "ผู้เดินทางข้ามมิติ", icon: "🌀" },
  "ภาคีดาบเงิน": { id: "silver_sword_order", name: "Silver Sword Order", thaiName: "ภาคีดาบเงิน", icon: "🛡️" },
  "เผ่าจันทราคราม": { id: "blue_moon_tribe", name: "Blue Moon Tribe", thaiName: "เผ่าจันทราคราม", icon: "🌙" },
  "กิลด์กรงเล็บดำ": { id: "black_claw_guild", name: "Black Claw Guild", thaiName: "กิลด์กรงเล็บดำ", icon: "🐾" },
  "จักรวรรดิเหล็กสนิม": { id: "rusty_iron_empire", name: "Rusty Iron Empire", thaiName: "จักรวรรดิเหล็กสนิม", icon: "⚙️" },
  "วิหารดอกบัวเลือด": { id: "blood_lotus_temple", name: "Blood Lotus Temple", thaiName: "วิหารดอกบัวเลือด", icon: "🪷" },
  "สมาพันธ์มังกร": { id: "dragon_alliance", name: "Dragon Alliance", thaiName: "สมาพันธ์มังกร", icon: "🐲" },
  "คาราวานหมื่นดาว": { id: "ten_thousand_stars_caravan", name: "Ten Thousand Stars Caravan", thaiName: "คาราวานหมื่นดาว", icon: "✨" },
  "หอคอยกลับหัว": { id: "inverted_tower", name: "Inverted Tower", thaiName: "หอคอยกลับหัว", icon: "🏰" },
  "อสูรเถ้าขาว": { id: "white_ash_demons", name: "White Ash Demons", thaiName: "อสูรเถ้าขาว", icon: "💀" },
  "สภาเทพมารอวสาน": { id: "apocalyptic_council", name: "Apocalyptic Council", thaiName: "สภาเทพมารอวสาน", icon: "👁️" },
  "ทศผู้เฝ้ามอง": { id: "ten_watchers", name: "Ten Watchers", thaiName: "ทศผู้เฝ้ามอง", icon: "👁️‍🗨️" },
  "Eclipse Nova": { id: "eclipse_nova", name: "Eclipse Nova", thaiName: "ไอดอลแห่งจันทรา", icon: "🎵" },
  "Velvet Maid Covenant": { id: "velvet_maid_covenant", name: "Velvet Maid Covenant", thaiName: "คฤหาสน์เมดแห่งพันธสัญญา", icon: "🧹" },
  "Étoile Royale Academy": { id: "etoile_royale_academy", name: "Étoile Royale Academy", thaiName: "สถาบันเจ้าหญิงแห่งดวงดาว", icon: "👑" },
  "Celestial Jade Court": { id: "celestial_jade_court", name: "Celestial Jade Court", thaiName: "วังหยกสวรรค์", icon: "🏛️" },
  "Night-Parade Phantom": { id: "night_parade_phantom", name: "Night-Parade Phantom", thaiName: "สมาคมร้อยพรายรัตติกาล", icon: "🦊" },
  "The Paradox Labyrinth": { id: "the_paradox_labyrinth", name: "The Paradox Labyrinth", thaiName: "เขาวงกตกระจกเงา", icon: "🌀" },
  "The Abyssal Trench Court": { id: "the_abyssal_trench_court", name: "The Abyssal Trench Court", thaiName: "ราชสำนักห้วงอเวจี", icon: "🔱" },
  "Arcana Eclipsed Covenant": { id: "arcana_eclipsed_covenant", name: "Arcana Eclipsed Covenant", thaiName: "พันธสัญญาแห่งอาร์คาน่า", icon: "🃏" },
  "สมาคมผู้ชี้นำทาง": { id: "guide_association", name: "Guide Association", thaiName: "สมาคมผู้ชี้นำทาง", icon: "🧭" },
  "วิหารเทพีอีลิเซียม": { id: "22", name: "The Elysian Apex", thaiName: "วิหารเทพีอีลิเซียม", icon: "🏛️✨" },
  "อาณาจักรวัลคีรีนอร์ส": { id: "23", name: "Norse Valkyrie Dominion", thaiName: "อาณาจักรวัลคีรีนอร์ส", icon: "ᚱ" },
  "Solar Necropolis of Egypt": { id: "24", name: "Solar Necropolis of Egypt", thaiName: "นครสุสานสุริยา", icon: "☀️🏺" },
  "Heavenly Kami War Court": { id: "25", name: "Heavenly Kami War Court", thaiName: "ศาลเจ้าเทวะสวรรค์", icon: "🏮👘" }
};

export function getCharacterFaction(char: any): Faction {
  if (!char) return { id: 'unknown', name: 'Unknown', thaiName: 'กลุ่มที่ไม่รู้จัก', icon: '📁' };
  const fName = char.faction || char.factionName || '';
  if (FACTION_MAP[fName]) {
    return FACTION_MAP[fName];
  }
  // Fallback check based on factionId or f
  const fid = char.factionId || char.f;
  if (fid != null) {
    const found = Object.values(FACTION_MAP).find(f => String(f.id) === String(fid));
    if (found) return found;
  }
  return {
    id: String(fid || fName || 'unknown').toLowerCase(),
    name: fName || 'Unknown Faction',
    thaiName: fName || 'กลุ่มที่ไม่รู้จัก',
    icon: '📁'
  };
}
