import { useMemo } from 'react';
import { useStudio } from '../state/StudioStore';
import { activeCharacters, activePoses } from '../data';
import { buildPrompt, STYLE_META } from '../engine/promptBuilder';

export default function FloatingCopyPanel() {
  const { state, setFloatingCopyCollapsed, setStep, showToast, addHistory } = useStudio();
  const selectedChar = useMemo(() => (activeCharacters as any[]).find(c => c.id === state.characterId), [state.characterId]);
  const selectedPose = useMemo(() => (activePoses as any[]).find(p => p.id === state.poseId), [state.poseId]);
  const promptReady = !!(selectedChar && selectedPose);

  const promptResult = useMemo(() => {
    if (!selectedChar || !selectedPose) return null;
    return buildPrompt(selectedChar, selectedPose, state.itemMode, state.promptStyle, state.promptMode === 'compact');
  }, [selectedChar, selectedPose, state.itemMode, state.promptStyle, state.promptMode]);

  const copy = (mode: 'positive' | 'negative' | 'both') => {
    if (!promptResult) return;
    const text = mode === 'both'
      ? `Positive Prompt:\n${promptResult.positive}\n\nNegative Prompt:\n${promptResult.negative}`
      : mode === 'negative' ? promptResult.negative : promptResult.positive;
    navigator.clipboard.writeText(text).then(() => {
      showToast(mode === 'both' ? 'คัดลอก Pos + Neg แล้ว' : mode === 'negative' ? 'คัดลอก Negative แล้ว' : 'คัดลอก Positive แล้ว');
    }).catch(() => showToast('คัดลอกไม่สำเร็จ'));
    if (selectedChar && selectedPose) {
      addHistory({
        charId: selectedChar.id, poseId: selectedPose.id,
        charName: selectedChar.name || selectedChar.title,
        poseTitle: selectedPose.title, styleId: state.promptStyle,
        itemMode: state.itemMode, positive: promptResult.positive,
        negative: promptResult.negative, timestamp: new Date().toISOString()
      });
    }
  };

  return (
    <>
      <div className={`desktop-floating-copy-panel ${state.floatingCopyCollapsed ? 'is-collapsed' : ''}`}>
        <div className="floating-copy-header">
          <div>
            <div className="floating-copy-kicker">📋 Prompt Panel</div>
            <div className="floating-copy-title">{promptReady ? 'พร้อมคัดลอก' : 'เลือกตัวละคร + ท่าก่อน'}</div>
          </div>
          <button className="floating-copy-toggle" onClick={() => setFloatingCopyCollapsed(true)}>−</button>
        </div>
        <div className={`floating-copy-helper ${promptReady ? 'ready' : ''}`}>
          {promptReady ? '✅ Prompt Ready' : 'กรุณาเลือกตัวละครและท่าทาง'}
        </div>
        <div className="floating-copy-summary">
          <div>ตัวละคร: <span>{selectedChar?.name || selectedChar?.title || '—'}</span></div>
          <div>ท่า: <span>{selectedPose?.titleTH || selectedPose?.title || '—'}</span></div>
          <div>Mode: <span>{state.itemMode === 'with_item' ? 'ถือของประจำตัว' : 'ไม่ถืออะไร'} · {STYLE_META[state.promptStyle]?.name || state.promptStyle}</span></div>
        </div>
        <div className="floating-copy-actions">
          <button disabled={!promptReady} onClick={() => copy('positive')}>Copy Positive</button>
          <button disabled={!promptReady} onClick={() => copy('negative')}>Copy Negative</button>
          <button disabled={!promptReady} onClick={() => copy('both')}>Copy Both</button>
          <button disabled={!promptReady} onClick={() => setStep(3)}>ดู Prompt เต็ม →</button>
        </div>
      </div>
      <button className={`floating-copy-collapsed ${state.floatingCopyCollapsed ? 'show' : ''}`}
              onClick={() => setFloatingCopyCollapsed(false)}>
        📋 Copy
      </button>
    </>
  );
}
