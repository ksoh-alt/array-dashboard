import { projects } from '../data/sampleData';
import './Timeline.css';

function Timeline() {
  // Calculate timeline range
  const allDates = projects.flatMap(p => [new Date(p.startDate), new Date(p.endDate)]);
  const minDate = new Date(Math.min(...allDates));
  const maxDate = new Date(Math.max(...allDates));
  const totalDays = (maxDate - minDate) / (1000 * 60 * 60 * 24);
  const today = new Date();

  // Generate month labels
  const months = [];
  const cursor = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
  while (cursor <= maxDate) {
    const label = cursor.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const offset = ((cursor - minDate) / (1000 * 60 * 60 * 24) / totalDays) * 100;
    months.push({ label, offset });
    cursor.setMonth(cursor.getMonth() + 1);
  }

  const todayOffset = ((today - minDate) / (1000 * 60 * 60 * 24) / totalDays) * 100;

  return (
    <div className="timeline">
      <h1>Project Timeline</h1>
      <p className="subtitle">Visual overview of project durations</p>

      <div className="timeline-chart">
        {/* Month labels */}
        <div className="timeline-months">
          {months.map((m, i) => (
            <div key={i} className="month-label" style={{ left: `${m.offset}%` }}>
              {m.label}
            </div>
          ))}
        </div>

        {/* Today marker */}
        {todayOffset >= 0 && todayOffset <= 100 && (
          <div className="today-marker" style={{ left: `${todayOffset}%` }}>
            <div className="today-line"></div>
            <span className="today-label">Today</span>
          </div>
        )}

        {/* Project bars */}
        <div className="timeline-bars">
          {projects.map(project => {
            const start = new Date(project.startDate);
            const end = new Date(project.endDate);
            const leftPct = ((start - minDate) / (1000 * 60 * 60 * 24) / totalDays) * 100;
            const widthPct = ((end - start) / (1000 * 60 * 60 * 24) / totalDays) * 100;

            return (
              <div key={project.id} className="timeline-row">
                <div className="timeline-project-name">{project.name}</div>
                <div className="timeline-bar-container">
                  <div
                    className={`timeline-bar status-bar-${project.status.toLowerCase().replace(' ', '-')}`}
                    style={{ left: `${leftPct}%`, width: `${widthPct}%` }}
                  >
                    <span className="bar-label">{project.progress}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="timeline-legend">
        <span className="legend-item"><span className="legend-dot status-bar-in-progress"></span> In Progress</span>
        <span className="legend-item"><span className="legend-dot status-bar-planning"></span> Planning</span>
        <span className="legend-item"><span className="legend-dot status-bar-completed"></span> Completed</span>
      </div>
    </div>
  );
}

export default Timeline;
