import { projects, scheduleItems, moduleFreezes } from '../data/sampleData';
import './Overview.css';

function Overview() {
  const totalProjects = projects.length;
  const inProgress = projects.filter(p => p.status === 'In Progress').length;
  const completed = projects.filter(p => p.status === 'Completed').length;
  const upcomingFreezes = moduleFreezes.filter(m => m.status === 'Pending').length;
  const upcomingMilestones = scheduleItems.filter(s => s.status === 'Upcoming').length;

  return (
    <div className="overview">
      <h1>Project Overview</h1>
      <p className="subtitle">Consolidated view of all team projects</p>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{totalProjects}</div>
          <div className="stat-label">Total Projects</div>
        </div>
        <div className="stat-card stat-progress">
          <div className="stat-value">{inProgress}</div>
          <div className="stat-label">In Progress</div>
        </div>
        <div className="stat-card stat-complete">
          <div className="stat-value">{completed}</div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat-card stat-freeze">
          <div className="stat-value">{upcomingFreezes}</div>
          <div className="stat-label">Pending Freezes</div>
        </div>
        <div className="stat-card stat-milestone">
          <div className="stat-value">{upcomingMilestones}</div>
          <div className="stat-label">Upcoming Milestones</div>
        </div>
      </div>

      <h2>Project Summary</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Project</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td className="project-name">{project.name}</td>
              <td>{project.owner}</td>
              <td>
                <span className={`status-badge status-${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </td>
              <td>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: `${project.progress}%` }}></div>
                  <span className="progress-text">{project.progress}%</span>
                </div>
              </td>
              <td>{project.startDate}</td>
              <td>{project.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Overview;
