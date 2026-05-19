import { useState, useMemo } from 'react';
import { StudioContext, useStudioState } from './state/StudioStore';
import { getAllFactions, getVisibleCharacters } from './engine/characterSource';
import { getVisiblePoses } from './engine/poseFilterEngine';
import { buildPrompt, COMPACT_STYLE_PROMPTS } from './engine/promptBuilder';
import { activeCharacters, activePoses } from './data';
import './styles/global.css';

function AppContent() {
  const { state, setStep, setCharacterId, setPoseId, setItemMode, setPromptStyle, setPromptTab } = useStudioState();
  const [charSearch, setCharSearch] = useState('');
  const [charFaction, setCharFaction] = useState('all');
  const [charGender, setCharGender] = useState('all');
  const [charRole, setCharRole] = useState('all');

  const [poseSearch, setPoseSearch] = useState('');
  const [poseCat, setPoseCat] = useState('all');

  const factions = useMemo(() => getAllFactions(), []);

  const visibleCharacters = useMemo(() =>
    getVisibleCharacters({ search: charSearch, factionId: charFaction, gender: charGender, role: charRole }),
    [charSearch, charFaction, charGender, charRole]
  );

  const selectedCharacter = useMemo(() =>
    activeCharacters.find(c => c.id === state.characterId),
    [state.characterId]
  );

  const visiblePoses = useMemo(() =>
    getVisiblePoses(selectedCharacter, state.itemMode, { search: poseSearch, category: poseCat }),
    [selectedCharacter, state.itemMode, poseSearch, poseCat]
  );

  const selectedPose = useMemo(() =>
    activePoses.find(p => p.id === state.poseId),
    [state.poseId]
  );

  const promptResult = useMemo(() => {
    if (!selectedCharacter || !selectedPose) return null;
    return buildPrompt(selectedCharacter, selectedPose, state.itemMode, state.promptStyle, true);
  }, [selectedCharacter, selectedPose, state.itemMode, state.promptStyle]);

  return (
    <div className="shell" data-testid="app-ready">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">🌌</div>
          <div>
            <h1>Character Prompt Studio V12</h1>
            <p>เลือกตัวละคร เลือกท่า แล้วคัดลอก Prompt ได้ทันที</p>
          </div>
        </div>
        <div className="top-stats">
          <span><b id="statCharacters">{activeCharacters.length}</b> characters</span>
          <span><b id="statPoses">{activePoses.length}</b> poses</span>
        </div>
      </header>

      <div className="stepper mt-4">
        <div className={`step-pill ${state.step === 1 ? 'active' : ''}`} onClick={() => setStep(1)}>
          <b>1</b> <span>ตัวละคร</span>
        </div>
        <div className={`step-pill ${state.step === 2 ? 'active' : ''}`} onClick={() => { if(selectedCharacter) setStep(2); }}>
          <b>2</b> <span>ท่าทาง</span>
        </div>
        <div className={`step-pill ${state.step === 3 ? 'active' : ''}`} onClick={() => { if(selectedCharacter && selectedPose) setStep(3); }}>
          <b>3</b> <span>Prompt</span>
        </div>
      </div>

      <div className={`panel ${state.step === 1 ? 'active' : ''}`}>
        <div className="sticky-head">
          <div className="panel-head">
            <div>
              <h2>1. เลือกตัวละคร (Character)</h2>
              <p>เลือกตัวละครที่ต้องการเจนภาพ</p>
            </div>
          </div>
          <div className="filter-grid character-filters">
            <select value={charFaction} onChange={e => setCharFaction(e.target.value)}>
              <option value="all">ทุกกลุ่ม (All Factions)</option>
              {factions.map(f => <option key={f.id} value={f.id}>{f.icon} {f.name}</option>)}
            </select>
            <select value={charGender} onChange={e => setCharGender(e.target.value)}>
              <option value="all">ทุกเพศ</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            <select value={charRole} onChange={e => setCharRole(e.target.value)}>
              <option value="all">ทุกสถานะอาวุธ</option>
              <option value="weapon">Weapon</option>
              <option value="non_weapon">Non-Weapon / Prop</option>
              <option value="none">No Item</option>
            </select>
            <input type="text" placeholder="ค้นหาตัวละคร..." value={charSearch} onChange={e => setCharSearch(e.target.value)} />
          </div>
        </div>

        <div className="character-grid mt-4">
          {visibleCharacters.map(c => (
            <div key={c.id}
                 className={`character-card ${state.characterId === c.id ? 'active' : ''}`}
                 onClick={() => { setCharacterId(c.id); setPoseId(null); setStep(2); }}>
              <div className="card-title" data-character-id={c.id}>{c.title || c.name}</div>
              <div className="badge-row">
                <span className={`badge ${c.gender === 'female' ? 'pink' : 'green'}`}>{c.gender}</span>
                <span className="badge">{c.faction || c.f}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`panel ${state.step === 2 ? 'active' : ''}`}>
        <div className="sticky-head">
           <div className="panel-head">
            <div>
              <h2>2. เลือกท่าทาง (Pose)</h2>
              <p>เลือกท่าทางที่เหมาะกับตัวละคร</p>
            </div>
          </div>

          {selectedCharacter && (
            <div className="summary-card">
              <h3>{(selectedCharacter as any).title || (selectedCharacter as any).name}</h3>
              <p>Item Role: {(selectedCharacter as any)?.personalItem?.itemRole || 'None'}</p>
            </div>
          )}

          <div className="item-mode-box">
             <div>
               <b>การตั้งค่าอาวุธ (Item Mode)</b>
               <p>ต้องการให้ตัวละครถืออาวุธหรือไม่</p>
             </div>
             <div className="item-toggle">
                <button className={state.itemMode === 'with_item' ? 'active' : ''} onClick={() => setItemMode('with_item')}>🗡️ With Item</button>
                <button className={state.itemMode === 'no_item' ? 'active' : ''} onClick={() => setItemMode('no_item')}>✋ No Item</button>
             </div>
          </div>

          <div className="filter-grid pose-filters">
            <select value={poseCat} onChange={e => setPoseCat(e.target.value)}>
              <option value="all">ทุกหมวด (All Categories)</option>
              <option value="standing">ท่ายืน (Standing)</option>
              <option value="camera_driven_glamour">หมวดตากล้อง (Camera Glamour)</option>
              <option value="combat">ต่อสู้ (Combat)</option>
            </select>
            <input type="text" placeholder="ค้นหาท่า..." value={poseSearch} onChange={e => setPoseSearch(e.target.value)} />
          </div>
        </div>

        <div className="pose-grid mt-4">
          {visiblePoses.map(p => (
            <div key={p.id}
                 className={`pose-card ${state.poseId === p.id ? 'active' : ''}`}
                 onClick={() => { setPoseId(p.id); setStep(3); }}>
              <div className="card-title" data-pose-id={p.id}>{p.titleTH || p.title}</div>
              <div className="card-text">{p.category} - {p.uiCategory}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={`panel ${state.step === 3 ? 'active' : ''}`}>
         <div className="panel-head">
            <div>
              <h2>3. สรุป Prompt</h2>
              <p>คัดลอก Prompt สำหรับนำไปใช้งาน</p>
            </div>
          </div>

          <div className="style-row">
            {Object.keys(COMPACT_STYLE_PROMPTS).map(k => (
              <button key={k} className={`style-chip ${state.promptStyle === k ? 'active' : ''}`}
                      onClick={() => setPromptStyle(k)}>
                {k.replace('_', ' ').toUpperCase()}
              </button>
            ))}
          </div>

          <div className="prompt-tabs">
            <button className={state.promptTab === 'positive' ? 'active' : ''} onClick={() => setPromptTab('positive')}>Positive</button>
            <button className={state.promptTab === 'negative' ? 'active' : ''} onClick={() => setPromptTab('negative')}>Negative</button>
          </div>

          <div className={`prompt-box ${state.promptTab}`}>
             {state.promptTab === 'positive' ? promptResult?.positive : promptResult?.negative}
          </div>

          <div className="copy-actions mt-4">
            <button className="primary-btn" onClick={() => {
              if (promptResult) navigator.clipboard.writeText(promptResult.positive);
            }}>Copy Positive</button>
            <button className="primary-soft" onClick={() => {
               if (promptResult) navigator.clipboard.writeText(promptResult.negative);
            }}>Copy Negative</button>
          </div>
      </div>
    </div>
  );
}

export default function App() {
  const store = useStudioState();
  return (
    <StudioContext.Provider value={store}>
      <AppContent />
    </StudioContext.Provider>
  );
}
