import { useMemo } from 'react';
import { useStudio } from '../state/StudioStore';
import { activeCharacters, activePoses } from '../data';
import { buildPrompt, STYLE_META } from '../engine/promptBuilder';

export default function MobileCopyBar() {
  const { state, setStep, showToast, addHistory } = useStudio();
  const selectedChar = useMemo(() => (activeCharacters as any[]).find(c => c.id === state.characterId), [state.characterId]);
  const selectedPose = useMemo(() => (activePoses as any[]).find(p => p.id === state.poseId), [state.poseId]);
  const ready = !!(selectedChar && selectedPose);

  const promptResult = useMemo(() => {
    if (!selectedChar || !selectedPose) return null;
    return buildPrompt(selectedChar, selectedPose, state.itemMode, state.promptStyle, state.promptMode === 'compact');
  }, [selectedChar, selectedPose, state.itemMode, state.promptStyle, state.promptMode]);

  const copy = (mode: 'positive' | 'both') => {
    if (!promptResult) return;
    const text = mode === 'both'
      ? `Positive Prompt:\n${promptResult.positive}\n\nNegative Prompt:\n${promptResult.negative}`
      : promptResult.positive;
    navigator.clipboard.writeText(text).then(() => {
      showToast(mode === 'both' ? 'คัดลอก Both แล้ว' : 'คัดลอก Positive แล้ว');
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

  const copyAndReturn = () => {
    copy('positive');
    setStep(2);
  };

  return (
    <div className={`mobile-copy-bar ${ready ? 'show' : ''}`}>
      <div className="mobile-copy-meta">
        <div className="mobile-copy-title">{selectedChar?.name || ''} · {selectedPose?.titleTH || selectedPose?.title || ''}</div>
        <div className="mobile-copy-sub">{state.itemMode === 'with_item' ? 'ถือของ' : 'ไม่ถือ'} · {STYLE_META[state.promptStyle]?.name || state.promptStyle}</div>
      </div>
      <div className="mobile-copy-actions">
        <button className="mobile-copy-primary" onClick={() => copy('positive')}>Copy</button>
        <button className="mobile-copy-secondary" onClick={() => copy('both')}>Both</button>
        <button className="mobile-copy-ghost" onClick={copyAndReturn}>Copy+</button>
        <button className="mobile-copy-ghost" onClick={() => setStep(3)}>View</button>
      </div>
    </div>
  );
}
