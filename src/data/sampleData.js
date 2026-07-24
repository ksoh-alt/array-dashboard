// Sample project data for the dashboard
// Replace with real data or API calls as the project evolves

export const projects = [
  {
    id: 1,
    name: 'Array Signal Processing',
    status: 'In Progress',
    owner: 'Alice',
    startDate: '2026-01-15',
    endDate: '2026-09-30',
    progress: 45,
  },
  {
    id: 2,
    name: 'Beamforming Engine',
    status: 'In Progress',
    owner: 'Bob',
    startDate: '2026-03-01',
    endDate: '2026-11-15',
    progress: 30,
  },
  {
    id: 3,
    name: 'Calibration Suite',
    status: 'Planning',
    owner: 'Charlie',
    startDate: '2026-06-01',
    endDate: '2026-12-31',
    progress: 10,
  },
  {
    id: 4,
    name: 'Data Pipeline',
    status: 'Completed',
    owner: 'Diana',
    startDate: '2025-10-01',
    endDate: '2026-04-30',
    progress: 100,
  },
];

export const scheduleItems = [
  { id: 1, project: 'Array Signal Processing', milestone: 'Requirements Review', date: '2026-02-15', status: 'Completed' },
  { id: 2, project: 'Array Signal Processing', milestone: 'Design Review', date: '2026-04-20', status: 'Completed' },
  { id: 3, project: 'Array Signal Processing', milestone: 'Alpha Release', date: '2026-07-30', status: 'In Progress' },
  { id: 4, project: 'Array Signal Processing', milestone: 'Beta Release', date: '2026-09-15', status: 'Upcoming' },
  { id: 5, project: 'Beamforming Engine', milestone: 'Architecture Review', date: '2026-04-10', status: 'Completed' },
  { id: 6, project: 'Beamforming Engine', milestone: 'Prototype Demo', date: '2026-06-30', status: 'In Progress' },
  { id: 7, project: 'Beamforming Engine', milestone: 'Integration Testing', date: '2026-09-01', status: 'Upcoming' },
  { id: 8, project: 'Calibration Suite', milestone: 'Kickoff Meeting', date: '2026-06-15', status: 'In Progress' },
  { id: 9, project: 'Calibration Suite', milestone: 'Design Review', date: '2026-08-30', status: 'Upcoming' },
  { id: 10, project: 'Data Pipeline', milestone: 'Final Release', date: '2026-04-30', status: 'Completed' },
];

export const moduleFreezes = [
  { id: 1, module: 'Core DSP Library', project: 'Array Signal Processing', freezeDate: '2026-08-15', status: 'Pending', owner: 'Alice' },
  { id: 2, module: 'Antenna Interface', project: 'Array Signal Processing', freezeDate: '2026-08-01', status: 'Pending', owner: 'Alice' },
  { id: 3, module: 'Beam Steering', project: 'Beamforming Engine', freezeDate: '2026-09-30', status: 'Pending', owner: 'Bob' },
  { id: 4, module: 'Weight Calculator', project: 'Beamforming Engine', freezeDate: '2026-10-15', status: 'Pending', owner: 'Bob' },
  { id: 5, module: 'Auto-Cal Engine', project: 'Calibration Suite', freezeDate: '2026-11-30', status: 'Pending', owner: 'Charlie' },
  { id: 6, module: 'Data Ingest', project: 'Data Pipeline', freezeDate: '2026-03-15', status: 'Frozen', owner: 'Diana' },
  { id: 7, module: 'ETL Framework', project: 'Data Pipeline', freezeDate: '2026-04-01', status: 'Frozen', owner: 'Diana' },
];
