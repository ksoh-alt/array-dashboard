import { scheduleItems } from '../data/sampleData';
import './Schedule.css';

function Schedule() {
  const groupedByProject = scheduleItems.reduce((acc, item) => {
    if (!acc[item.project]) acc[item.project] = [];
    acc[item.project].push(item);
    return acc;
  }, {});

  return (
    <div className="schedule">
      <h1>Project Schedule</h1>
      <p className="subtitle">Milestones and key dates for all projects</p>

      {Object.entries(groupedByProject).map(([project, items]) => (
        <div key={project} className="schedule-group">
          <h2>{project}</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Milestone</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td className="milestone-name">{item.milestone}</td>
                  <td>{item.date}</td>
                  <td>
                    <span className={`status-badge status-${item.status.toLowerCase().replace(' ', '-')}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Schedule;
