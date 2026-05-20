import { useState, useMemo, useEffect } from 'react';
import { useStudio } from '../state/StudioStore';
import { getAllFactions, getVisibleCharacters, getAllCharacters } from '../engine/characterSource';
import { inferGender, inferRole, genderLabel, roleLabel, getCharacterFaction, type Faction } from '../engine/characterUtils';

export default function CharacterPanel() {
  const { state, setCharacterId, setPoseId, setStep, setItemMode } = useStudio();
  const [search, setSearch] = useState('');
  const [faction, setFaction] = useState('all');
  const [gender, setGender] = useState('all');
  const [role, setRole] = useState('all');
  const [manualExpanded, setManualExpanded] = useState<Record<string, boolean>>({});

  const factions = useMemo(() => getAllFactions(), []);
  const allCharacters = useMemo(() => getAllCharacters(), []);
  const allVisible = useMemo(() => getVisibleCharacters({ search, factionId: faction, gender, role }), [search, faction, gender, role]);

  const groupedCharacters = useMemo(() => {
    const groups: { [factionId: string]: { faction: Faction, characters: any[] } } = {};
    allVisible.forEach((c: any) => {
      const f = getCharacterFaction(c);
      if (!groups[f.id]) {
        groups[f.id] = { faction: f, characters: [] };
      }
      groups[f.id].characters.push(c);
    });
    return Object.values(groups).sort((a, b) => a.faction.thaiName.localeCompare(b.faction.thaiName, 'th'));
  }, [allVisible]);

  // Reset manual expand state when search or filter changes to let auto-expansion do its job
  useEffect(() => {
    setManualExpanded({});
  }, [search, faction, gender, role]);

  const isFactionExpanded = (factionId: string, hasSelectedChar: boolean) => {
    // 1. Manual override takes highest priority
    if (manualExpanded[factionId] !== undefined) {
      return manualExpanded[factionId];
    }
    // 2. Auto-expand if active text search is in progress
    if (search.trim() !== '') {
      return true;
    }
    // 3. Auto-expand if specific faction is filtered
    if (faction !== 'all') {
      return true;
    }
    // 4. Auto-expand if faction contains the currently selected character
    if (hasSelectedChar) {
      return true;
    }
    // 5. Otherwise collapsed by default
    return false;
  };

  const toggleFaction = (factionId: string, hasSelectedChar: boolean) => {
    const expanded = isFactionExpanded(factionId, hasSelectedChar);
    setManualExpanded(prev => ({
      ...prev,
      [factionId]: !expanded
    }));
  };

  const handleExpandAll = () => {
    const updated: Record<string, boolean> = {};
    groupedCharacters.forEach(g => {
      updated[g.faction.id] = true;
    });
    setManualExpanded(updated);
  };

  const handleCollapseAll = () => {
    const updated: Record<string, boolean> = {};
    groupedCharacters.forEach(g => {
      updated[g.faction.id] = false;
    });
    setManualExpanded(updated);
  };

  const clearFilters = () => {
    setSearch(''); setFaction('all'); setGender('all'); setRole('all');
  };

  const selectChar = (c: any) => {
    setCharacterId(c.id);
    setPoseId(null);
    const hasItem = c?.personalItem?.itemRole && c.personalItem.itemRole !== 'none';
    if (hasItem) setItemMode('with_item');
    else setItemMode('no_item');
    setStep(2);
  };

  if (state.step !== 1) return null;

  return (
    <div className="panel active">
      <div className="sticky-head">
        <div className="panel-head">
          <div>
            <h2>1. เลือกตัวละคร (Character)</h2>
            <p>เลือกตัวละครที่ต้องการเจนภาพ</p>
          </div>
          <button className="ghost-btn" onClick={clearFilters}>ล้าง Filter</button>
        </div>
        <div className="filter-grid character-filters">
          <select value={faction} onChange={e => setFaction(e.target.value)}>
            <option value="all">ทุกกลุ่ม (All Factions)</option>
            {factions.map((f: any) => <option key={f.id} value={f.id}>{f.icon} {f.thaiName || f.name}</option>)}
          </select>
          <select value={gender} onChange={e => setGender(e.target.value)}>
            <option value="all">ทุกเพศ</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="all">ทุกสถานะอาวุธ</option>
            <option value="weapon">Weapon</option>
            <option value="non_weapon">Non-Weapon / Prop</option>
            <option value="none">No Item</option>
          </select>
          <input type="text" placeholder="ค้นหาตัวละคร..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <span className="hint-chip">แสดง {allVisible.length}/{allCharacters.length} ตัวละคร</span>
            {groupedCharacters.length > 0 && (
              <>
                <button className="ghost-btn" style={{ padding: '5px 9px', fontSize: '11px', height: 'auto', borderRadius: '8px', fontWeight: 800 }} onClick={handleExpandAll}>ขยายทั้งหมด</button>
                <button className="ghost-btn" style={{ padding: '5px 9px', fontSize: '11px', height: 'auto', borderRadius: '8px', fontWeight: 800 }} onClick={handleCollapseAll}>ยุบทั้งหมด</button>
              </>
            )}
          </div>
          {state.characterId && <span className="hint-chip" style={{ background: '#eef2ff', color: '#4338ca' }}>เลือกอยู่: {(allCharacters.find((c: any) => c.id === state.characterId) as any)?.name || state.characterId}</span>}
        </div>
      </div>

      <div className="factions-container mt-4">
        {groupedCharacters.map(({ faction: fGroup, characters }) => {
          const hasSelectedChar = characters.some((c: any) => c.id === state.characterId);
          const expanded = isFactionExpanded(fGroup.id, hasSelectedChar);

          return (
            <div key={fGroup.id} className="faction-group-section" style={{ marginBottom: '16px' }}>
              <button
                className="faction-group-header"
                onClick={() => toggleFaction(fGroup.id, hasSelectedChar)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  width: '100%',
                  border: 'none',
                  textAlign: 'left',
                  padding: '10px 14px',
                  background: expanded
                    ? 'linear-gradient(135deg, #eef2ff, #e0e7ff)'
                    : 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
                  borderLeft: expanded ? '5px solid #4f46e5' : '5px solid #94a3b8',
                  borderRadius: '12px',
                  marginBottom: '10px',
                  fontWeight: '900',
                  fontSize: '13px',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)',
                  color: expanded ? '#1e1b4b' : '#475467',
                  cursor: 'pointer',
                  userSelect: 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <span style={{ fontSize: '16px' }}>{fGroup.icon}</span>
                <span>{fGroup.thaiName}</span>
                <span style={{ color: '#667085', fontSize: '11px', fontWeight: 'normal', marginLeft: '6px' }}>
                  ({characters.length} ตัวละคร)
                </span>
                <span style={{ marginLeft: 'auto', fontSize: '11px', color: '#4f46e5', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {expanded ? '▲ ซ่อน' : '▼ แสดง'}
                </span>
              </button>

              {expanded && (
                <div className="character-grid">
                  {characters.map((c: any) => {
                    const g = inferGender(c);
                    const r = inferRole(c);
                    const core = c?.characterCore || {};
                    const preview = [core.face, core.hair, core.outfit].filter(Boolean).join(', ').slice(0, 120);
                    return (
                      <button key={c.id}
                              className={`character-card ${state.characterId === c.id ? 'active' : ''}`}
                              onClick={() => selectChar(c)}>
                        <div className="card-title">{c.title || c.name}</div>
                        {preview && <div className="card-text">{preview}...</div>}
                        <div className="badge-row">
                          <span className={`badge ${g === 'female' ? 'pink' : 'green'}`}>{genderLabel(g)}</span>
                          <span className="badge pink">{roleLabel(r)}</span>
                          <span className="badge green">{fGroup.thaiName}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
        {groupedCharacters.length === 0 && (
          <div className="summary-card">
            <h3>ไม่พบตัวละคร</h3>
            <p>ลองล้าง filter หรือเปลี่ยนคำค้นหาค่ะ</p>
          </div>
        )}
      </div>
    </div>
  );
}
