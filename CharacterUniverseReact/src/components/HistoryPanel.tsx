import { useStudio } from '../state/StudioStore';

export default function HistoryPanel() {
  const { history, showToast } = useStudio();

  const copyHistory = (entry: any, mode: 'positive' | 'both') => {
    const text = mode === 'both'
      ? `Positive Prompt:\n${entry.positive}\n\nNegative Prompt:\n${entry.negative}`
      : entry.positive;
    navigator.clipboard.writeText(text).then(() => {
      showToast(mode === 'both' ? 'คัดลอก Positive + Negative แล้ว' : 'คัดลอก Positive แล้ว');
    }).catch(() => showToast('คัดลอกไม่สำเร็จ'));
  };

  if (!history.length) return null;

  return (
    <details className="history-panel" style={{ marginTop: '16px' }}>
      <summary>📋 ประวัติ Prompt ล่าสุด ({history.length})</summary>
      <div className="history-list">
        {history.map((h, idx) => (
          <div key={idx} className="history-card">
            <div className="card-title">{h.charName}</div>
            <div className="card-text">{h.poseTitle} · {h.itemMode === 'with_item' ? 'ถือของ' : 'ไม่ถือ'}</div>
            <div className="badge-row">
              <button className="ghost-btn" onClick={() => copyHistory(h, 'positive')}>Positive</button>
              <button className="ghost-btn" onClick={() => copyHistory(h, 'both')}>Both</button>
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}
