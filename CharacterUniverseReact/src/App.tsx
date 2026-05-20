import { StudioContext, useStudioState } from './state/StudioStore';
import Topbar from './components/Topbar';
import Stepper from './components/Stepper';
import CharacterPanel from './components/CharacterPanel';
import PosePanel from './components/PosePanel';
import PromptPanel from './components/PromptPanel';
import FloatingCopyPanel from './components/FloatingCopyPanel';
import MobileCopyBar from './components/MobileCopyBar';
import Toast from './components/Toast';
import './styles/global.css';

function AppContent() {
  return (
    <>
      <Topbar />
      <div className="shell">
        <Stepper />
        <CharacterPanel />
        <PosePanel />
        <PromptPanel />
      </div>
      <FloatingCopyPanel />
      <MobileCopyBar />
      <Toast />
    </>
  );
}

export default function App() {
  const studio = useStudioState();
  return (
    <StudioContext.Provider value={studio}>
      <AppContent />
    </StudioContext.Provider>
  );
}
