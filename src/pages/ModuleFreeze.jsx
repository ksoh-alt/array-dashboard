import { moduleFreezes } from '../data/sampleData';
import './ModuleFreeze.css';

function ModuleFreeze() {
  const today = new Date();

  const sortedFreezes = [...moduleFreezes].sort(
    (a, b) => new Date(a.freezeDate) - new Date(b.freezeDate)
  );

  const getDaysUntil = (dateStr) => {
    const date = new Date(dateStr);
    const diff = Math.ceil((date - today) / (1000 * 60 * 60 * 24));
    return diff;
  };

  const getUrgencyClass = (dateStr, status) => {
    if (status === 'Frozen') return 'urgency-frozen';
    const days = getDaysUntil(dateStr);
    if (days < 0) return 'urgency-overdue';
    if (days <= 14) return 'urgency-critical';
    if (days <= 30) return 'urgency-warning';
    return 'urgency-normal';
  };

  return (
    <div className="module-freeze">
      <h1>Module Freeze Tracker</h1>
      <p className="subtitle">Track code freeze dates and status for all modules</p>

      <table className="data-table">
        <thead>
          <tr>
            <th>Module</th>
            <th>Project</th>
            <th>Owner</th>
            <th>Freeze Date</th>
            <th>Days Until Freeze</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedFreezes.map(item => {
            const daysUntil = getDaysUntil(item.freezeDate);
            const urgency = getUrgencyClass(item.freezeDate, item.status);

            return (
              <tr key={item.id} className={urgency}>
                <td className="module-name">{item.module}</td>
                <td>{item.project}</td>
                <td>{item.owner}</td>
                <td>{item.freezeDate}</td>
                <td className="days-cell">
                  {item.status === 'Frozen' ? (
                    <span className="frozen-badge">✅ Frozen</span>
                  ) : daysUntil < 0 ? (
                    <span className="overdue-badge">⚠️ {Math.abs(daysUntil)} days overdue</span>
                  ) : (
                    <span>{daysUntil} days</span>
                  )}
                </td>
                <td>
                  <span className={`status-badge status-${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ModuleFreeze;
