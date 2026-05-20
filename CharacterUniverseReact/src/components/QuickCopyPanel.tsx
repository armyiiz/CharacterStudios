import { useMemo } from 'react';
import { useStudio } from '../state/StudioStore';
import { activeCharacters, activePoses } from '../data';
import { buildPrompt } from '../engine/promptBuilder';

export default function QuickCopyPanel() {
  const { state, setStep, showToast, addHistory } = useStudio();
  const selectedChar = useMemo(() => (activeCharacters as any[]).find(c => c.id === state.characterId), [state.characterId]);
  const selectedPose = useMemo(() => (activePoses as any[]).find(p => p.id === state.poseId), [state.poseId]);

  if (!selectedChar || !selectedPose) return null;

  const prompt = buildPrompt(selectedChar, selectedPose, state.itemMode, state.promptStyle, state.promptMode === 'compact');

  const copy = (mode: 'positive' | 'negative' | 'both') => {
    const text = mode === 'both'
      ? `Positive Prompt:\n${prompt.positive}\n\nNegative Prompt:\n${prompt.negative}`
      : mode === 'negative' ? prompt.negative : prompt.positive;
    navigator.clipboard.writeText(text).then(() => {
      showToast(mode === 'both' ? 'คัดลอก Positive + Negative แล้ว' : mode === 'negative' ? 'คัดลอก Negative แล้ว' : 'คัดลอก Positive แล้ว');
    }).catch(() => showToast('คัดลอกไม่สำเร็จ'));
    addHistory({
      charId: selectedChar.id, poseId: selectedPose.id,
      charName: selectedChar.name || selectedChar.title,
      poseTitle: selectedPose.title, styleId: state.promptStyle,
      itemMode: state.itemMode, positive: prompt.positive,
      negative: prompt.negative, timestamp: new Date().toISOString()
    });
  };

  return (
    <div className="quick-copy-panel">
      <div>
        <h3>Prompt พร้อมแล้ว</h3>
        <p>{selectedChar.name} · {selectedPose.titleTH || selectedPose.title} · {state.itemMode === 'with_item' ? 'ถือของประจำตัว' : 'ไม่ถืออะไร'}</p>
      </div>
      <div className="quick-copy-actions">
        <button className="primary-btn" onClick={() => copy('positive')}>Copy Positive</button>
        <button className="dark-btn" onClick={() => copy('both')}>Copy Both</button>
        <button className="primary-soft" onClick={() => setStep(3)}>ดู Prompt →</button>
      </div>
    </div>
  );
}
