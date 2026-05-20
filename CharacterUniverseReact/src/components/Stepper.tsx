import { useStudio } from '../state/StudioStore';

export default function Stepper() {
  const { state, setStep, showToast } = useStudio();
  const hasChar = !!state.characterId;
  const hasPose = !!state.poseId;

  const goStep = (step: 1 | 2 | 3) => {
    if (step === 2 && !hasChar) { showToast('เลือกตัวละครก่อน'); return; }
    if (step === 3 && (!hasChar || !hasPose)) { showToast('เลือกท่าก่อน'); return; }
    setStep(step);
  };

  return (
    <div className="stepper mt-4">
      <div className={`step-pill ${state.step === 1 ? 'active' : ''}`}
           onClick={() => goStep(1)}>
        <b>1</b> <span>ตัวละคร</span>
      </div>
      <div className={`step-pill ${state.step === 2 ? 'active' : ''} ${!hasChar ? 'is-disabled' : ''}`}
           title={!hasChar ? 'เลือกตัวละครก่อน' : ''}
           onClick={() => goStep(2)}>
        <b>2</b> <span>ท่าทาง</span>
      </div>
      <div className={`step-pill ${state.step === 3 ? 'active' : ''} ${(!hasChar || !hasPose) ? 'is-disabled' : ''}`}
           title={!hasChar ? 'เลือกตัวละครก่อน' : !hasPose ? 'เลือกท่าก่อน' : ''}
           onClick={() => goStep(3)}>
        <b>3</b> <span>Prompt</span>
      </div>
    </div>
  );
}
