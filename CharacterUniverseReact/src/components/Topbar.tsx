import { activeCharacters, activePoses } from '../data';

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-mark">🌌</div>
        <div>
          <h1>Character Prompt Studio V12</h1>
          <p>เลือกตัวละคร เลือกท่า แล้วคัดลอก Prompt ได้ทันที</p>
        </div>
      </div>
      <div className="top-stats">
        <span><b>{(activeCharacters as any[]).length}</b> characters</span>
        <span><b>{(activePoses as any[]).length}</b> poses</span>
      </div>
    </header>
  );
}
