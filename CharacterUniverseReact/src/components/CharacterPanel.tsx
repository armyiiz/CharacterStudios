import { useState, useMemo, useEffect } from 'react';
import { useStudio } from '../state/StudioStore';
import { getAllFactions, getVisibleCharacters } from '../engine/characterSource';
import { inferGender, inferRole, genderLabel, roleLabel } from '../engine/characterUtils';

const PAGE_SIZE = 36;

export default function CharacterPanel() {
  const { state, setCharacterId, setPoseId, setStep, setItemMode } = useStudio();
  const [search, setSearch] = useState('');
  const [faction, setFaction] = useState('all');
  const [gender, setGender] = useState('all');
  const [role, setRole] = useState('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const factions = useMemo(() => getAllFactions(), []);
  const allVisible = useMemo(() => getVisibleCharacters({ search, factionId: faction, gender, role }), [search, faction, gender, role]);
  const visible = useMemo(() => allVisible.slice(0, visibleCount), [allVisible, visibleCount]);
  const hasMore = allVisible.length > visible.length;

  useEffect(() => { setVisibleCount(PAGE_SIZE); }, [search, faction, gender, role]);

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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
          <span className="hint-chip">แสดง {visible.length}/{allVisible.length} ตัวละคร</span>
          {state.characterId && <span className="hint-chip" style={{ background: '#eef2ff', color: '#4338ca' }}>เลือกอยู่: {(allVisible.find((c: any) => c.id === state.characterId) as any)?.name || state.characterId}</span>}
        </div>
      </div>

      <div className="character-grid mt-4">
        {visible.map((c: any) => {
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
                <span className="badge green">{c.faction || ''}</span>
              </div>
            </button>
          );
        })}
        {visible.length === 0 && (
          <div className="summary-card">
            <h3>ไม่พบตัวละคร</h3>
            <p>ลองล้าง filter หรือเปลี่ยนคำค้นหาค่ะ</p>
          </div>
        )}
      </div>

      {hasMore && (
        <div className="load-more-wrap">
          <button className="primary-soft" onClick={() => setVisibleCount(v => v + PAGE_SIZE)}>
            โหลดตัวละครเพิ่ม {Math.min(PAGE_SIZE, allVisible.length - visible.length)} ตัว
          </button>
        </div>
      )}
    </div>
  );
}
