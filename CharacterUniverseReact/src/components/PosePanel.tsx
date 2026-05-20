import { useState, useMemo, useCallback } from 'react';
import { useStudio } from '../state/StudioStore';
import { activeCharacters, activePoses } from '../data';
import { getVisiblePoses, getCategoryCountsForPoses } from '../engine/poseFilterEngine';
import { poseUiCategory, POSE_UI_CATEGORY_META, POSE_UI_CATEGORY_ORDER } from '../engine/poseCategories';
import QuickCopyPanel from './QuickCopyPanel';

const PAGE_SIZE = 48;

export default function PosePanel() {
  const { state, setPoseId, setStep, setItemMode, setPoseView, toggleFavorite, isFavorite, showToast, favorites } = useStudio();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const selectedChar = useMemo(() => (activeCharacters as any[]).find(c => c.id === state.characterId), [state.characterId]);
  const selectedPose = useMemo(() => (activePoses as any[]).find(p => p.id === state.poseId), [state.poseId]);

  // Get all compatible poses for category counts
  const allCompatible = useMemo(() => {
    if (!selectedChar) return [];
    return getVisiblePoses(selectedChar, state.itemMode, { category: 'all', search: '' }, 'all', favorites);
  }, [selectedChar, state.itemMode, favorites]);

  const categoryCounts = useMemo(() => getCategoryCountsForPoses(allCompatible), [allCompatible]);

  const visiblePoses = useMemo(() => {
    if (!selectedChar) return [];
    return getVisiblePoses(selectedChar, state.itemMode, { category, search }, state.poseView, favorites);
  }, [selectedChar, state.itemMode, category, search, state.poseView, favorites]);

  const visible = useMemo(() => visiblePoses.slice(0, visibleCount), [visiblePoses, visibleCount]);
  const hasMore = visiblePoses.length > visible.length;

  const suggestPose = useCallback(() => {
    const pool = visiblePoses.filter((p: any) => p.id !== state.poseId);
    if (!pool.length) { showToast('ไม่มีท่าที่เข้ากัน'); return; }
    const pick = pool[Math.floor(Math.random() * pool.length)];
    if (pick) { setPoseId(pick.id); showToast('สุ่มท่าที่เข้ากันแล้วค่ะ'); }
  }, [visiblePoses, state.poseId, setPoseId, showToast]);

  if (state.step !== 2 || !selectedChar) return null;

  return (
    <div className="panel active">
      <div className="sticky-head">
        <div className="panel-head">
          <div>
            <h2>2. เลือกท่าทาง (Pose)</h2>
            <p>เลือกท่าทางที่เหมาะกับตัวละคร</p>
          </div>
          <button className="ghost-btn" onClick={() => setStep(1)}>← เปลี่ยนตัวละคร</button>
        </div>

        <div className="summary-card">
          <h3>{selectedChar.title || selectedChar.name}</h3>
          <p>Item: {selectedChar?.personalItem?.name || 'None'} · Role: {selectedChar?.personalItem?.itemRole || 'none'}</p>
        </div>

        <QuickCopyPanel />

        <div className="item-mode-box">
          <div>
            <b>การตั้งค่าอาวุธ (Item Mode)</b>
            <p>ต้องการให้ตัวละครถืออาวุธหรือไม่</p>
          </div>
          <div className="item-toggle">
            <button className={state.itemMode === 'with_item' ? 'active' : ''} onClick={() => { setItemMode('with_item'); setVisibleCount(PAGE_SIZE); }}>🗡️ ถือของประจำตัว</button>
            <button className={state.itemMode === 'no_item' ? 'active' : ''} onClick={() => { setItemMode('no_item'); setVisibleCount(PAGE_SIZE); }}>✋ ไม่ถืออะไร</button>
          </div>
        </div>

        {/* Pose View Tabs */}
        <div className="pose-view-tabs" style={{ marginTop: '10px' }}>
          <button className={state.poseView === 'recommended' ? 'active' : ''} onClick={() => setPoseView('recommended')}>✨ Recommended</button>
          <button className={state.poseView === 'glamour' ? 'active' : ''} onClick={() => setPoseView('glamour')}>💋 Glamour</button>
          <button className={state.poseView === 'all' ? 'active' : ''} onClick={() => setPoseView('all')}>All ({allCompatible.length})</button>
          <button className={state.poseView === 'favorites' ? 'active' : ''} onClick={() => setPoseView('favorites')}>★ Favorites ({favorites.filter(id => allCompatible.some((p: any) => p.id === id)).length})</button>
        </div>

        <div className="filter-grid pose-filters" style={{ marginTop: '10px' }}>
          <select value={category} onChange={e => { setCategory(e.target.value); setVisibleCount(PAGE_SIZE); }}>
            <option value="all">ทุกหมวด ({categoryCounts['all'] || 0})</option>
            {POSE_UI_CATEGORY_ORDER.filter(k => k !== 'all' && (categoryCounts[k] || 0) > 0).map(k => (
              <option key={k} value={k}>{POSE_UI_CATEGORY_META[k]?.icon || '🎭'} {POSE_UI_CATEGORY_META[k]?.name || k} ({categoryCounts[k] || 0})</option>
            ))}
          </select>
          <input type="text" placeholder="ค้นหาท่า..." value={search} onChange={e => { setSearch(e.target.value); setVisibleCount(PAGE_SIZE); }} />
          <button className="primary-soft" onClick={suggestPose}>🎲 สุ่ม</button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
          <span className="hint-chip">แสดง {visible.length}/{visiblePoses.length} ท่า</span>
        </div>
      </div>

      <div className="pose-grid mt-4">
        {visible.map((p: any) => {
          const uiCat = poseUiCategory(p);
          const catMeta = POSE_UI_CATEGORY_META[uiCat];
          return (
            <div key={p.id}
                 className={`pose-card ${state.poseId === p.id ? 'active' : ''}`}
                 onClick={() => setPoseId(p.id)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="card-title">{p.titleTH || p.title}</div>
                <button
                  className="fav-btn"
                  onClick={(e) => { e.stopPropagation(); toggleFavorite(p.id); }}
                  title={isFavorite(p.id) ? 'ลบออกจากโปรด' : 'เพิ่มเข้าโปรด'}
                >
                  {isFavorite(p.id) ? '★' : '☆'}
                </button>
              </div>
              <div className="card-text">{catMeta?.icon || '🎭'} {catMeta?.name || uiCat}</div>
              <div className="meta">
                <span className={`dot ${p.intensity === 'bold' ? 'bold' : ''}`}>{p.intensity || 'safe'}</span>
              </div>
            </div>
          );
        })}
        {visible.length === 0 && (
          <div className="summary-card">
            <h3>ไม่พบท่าที่เข้ากัน</h3>
            <p>ลองเปลี่ยน filter หรือเลือก Item Mode อื่นค่ะ</p>
          </div>
        )}
      </div>

      {hasMore && (
        <div className="load-more-wrap">
          <button className="primary-soft" onClick={() => setVisibleCount(v => v + PAGE_SIZE)}>
            โหลดท่าเพิ่ม {Math.min(PAGE_SIZE, visiblePoses.length - visible.length)} ท่า
          </button>
        </div>
      )}

      <div className="bottom-actions">
        <button className="ghost-btn" onClick={() => setStep(1)}>← กลับเลือกตัวละคร</button>
        {state.poseId && <button className="primary-btn" onClick={() => setStep(3)}>ดู Prompt →</button>}
      </div>
    </div>
  );
}
