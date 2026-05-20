import { useMemo } from 'react';
import { useStudio } from '../state/StudioStore';
import { activeCharacters, activePoses } from '../data';
import { buildPrompt, STYLE_META, COMPACT_STYLE_PROMPTS, promptWarnings } from '../engine/promptBuilder';
import HistoryPanel from './HistoryPanel';

export default function PromptPanel() {
  const { state, setPromptStyle, setPromptTab, setPromptMode, setStep, showToast, addHistory } = useStudio();
  const selectedChar = useMemo(() => (activeCharacters as any[]).find(c => c.id === state.characterId), [state.characterId]);
  const selectedPose = useMemo(() => (activePoses as any[]).find(p => p.id === state.poseId), [state.poseId]);

  const promptResult = useMemo(() => {
    if (!selectedChar || !selectedPose) return null;
    return buildPrompt(selectedChar, selectedPose, state.itemMode, state.promptStyle, state.promptMode === 'compact');
  }, [selectedChar, selectedPose, state.itemMode, state.promptStyle, state.promptMode]);

  const warnings = useMemo(() => {
    if (!selectedChar || !selectedPose) return [];
    return promptWarnings(selectedChar, selectedPose, state.itemMode);
  }, [selectedChar, selectedPose, state.itemMode]);

  const copy = (mode: 'positive' | 'negative' | 'both') => {
    if (!promptResult) return;
    const text = mode === 'both'
      ? `Positive Prompt:\n${promptResult.positive}\n\nNegative Prompt:\n${promptResult.negative}`
      : mode === 'negative' ? promptResult.negative : promptResult.positive;
    navigator.clipboard.writeText(text).then(() => {
      showToast(mode === 'both' ? 'คัดลอก Positive + Negative แล้ว' : mode === 'negative' ? 'คัดลอก Negative แล้ว' : 'คัดลอก Positive แล้ว');
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

  const copyAndReturn = (mode: 'positive' | 'both') => {
    copy(mode);
    setStep(2);
  };

  if (state.step !== 3) return null;

  return (
    <div className="panel active">
      <div className="panel-head">
        <div>
          <h2>3. สรุป Prompt</h2>
          <p>คัดลอก Prompt สำหรับนำไปใช้งาน</p>
        </div>
        <button className="ghost-btn" onClick={() => setStep(2)}>← กลับเลือกท่า</button>
      </div>

      {selectedChar && selectedPose && (
        <div className="summary-card" style={{ marginBottom: '12px' }}>
          <h3>{selectedChar.title || selectedChar.name} · {selectedPose.titleTH || selectedPose.title}</h3>
          <p>{state.itemMode === 'with_item' ? '🗡️ ถือของประจำตัว' : '✋ ไม่ถืออะไร'}</p>
        </div>
      )}

      <div className="style-row">
        {Object.keys(COMPACT_STYLE_PROMPTS).map(k => (
          <button key={k} className={`style-chip ${state.promptStyle === k ? 'active' : ''}`}
                  onClick={() => setPromptStyle(k)}>
            {STYLE_META[k]?.icon || ''} {STYLE_META[k]?.name || k}
          </button>
        ))}
      </div>

      {/* Prompt Mode Toggle */}
      <div className="segmented" style={{ marginTop: '10px', maxWidth: '320px' }}>
        <button className={state.promptMode === 'compact' ? 'active' : ''} onClick={() => setPromptMode('compact')}>Compact</button>
        <button className={state.promptMode === 'full_debug' ? 'active' : ''} onClick={() => setPromptMode('full_debug')}>Full Debug</button>
      </div>

      {warnings.length > 0 && (
        <div className="compat-note warn" style={{ marginTop: '10px' }}>
          ⚠️ ควรระวัง: {warnings.join(' · ')}
        </div>
      )}
      {warnings.length === 0 && promptResult && (
        <div className="compat-note" style={{ marginTop: '10px' }}>
          ✅ พร้อมใช้งาน: pose นี้ผ่าน compatible filtering ของตัวละครแล้ว
        </div>
      )}

      <div className="prompt-copy-panel">
        <div className="copy-actions prompt-top-actions">
          <button className="primary-btn" onClick={() => copy('positive')}>Copy Positive</button>
          <button className="danger-btn" onClick={() => copy('negative')}>Copy Negative</button>
          <button className="dark-btn" onClick={() => copy('both')}>Copy Both</button>
          <button className="primary-soft" onClick={() => copyAndReturn('both')}>Copy Both + กลับเลือกท่า</button>
        </div>
      </div>

      <div className="prompt-tabs">
        <button className={state.promptTab === 'positive' ? 'active' : ''} onClick={() => setPromptTab('positive')}>Positive</button>
        <button className={state.promptTab === 'negative' ? 'active' : ''} onClick={() => setPromptTab('negative')}>Negative</button>
      </div>

      <div className={`prompt-box ${state.promptTab}`}>
        {state.promptTab === 'positive' ? promptResult?.positive : promptResult?.negative}
      </div>

      <div className="copy-actions mt-4">
        <button className="primary-btn" onClick={() => copy('positive')}>Copy Positive</button>
        <button className="danger-btn" onClick={() => copy('negative')}>Copy Negative</button>
        <button className="dark-btn" onClick={() => copy('both')}>Copy Both</button>
        <button className="ghost-btn" onClick={() => setStep(2)}>🎲 สุ่มท่าใหม่แล้วดู Prompt</button>
      </div>

      <HistoryPanel />
    </div>
  );
}
