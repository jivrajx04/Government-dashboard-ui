export interface Alert {
  id: string;
  title: string;
  region: string;
  cases: number;
  severity: 'high' | 'medium' | 'low';
  timestamp: string;
  details: string;
}

export const alerts: Alert[] = [
  {
    id: '1',
    title: 'Influenza Outbreak',
    region: 'Northern District',
    cases: 342,
    severity: 'high',
    timestamp: '2025-01-21T08:30:00Z',
    details: 'Significant spike in influenza cases over the past 72 hours. Immediate containment measures recommended.',
  },
  {
    id: '2',
    title: 'COVID-19 Cluster',
    region: 'Central Metro',
    cases: 128,
    severity: 'high',
    timestamp: '2025-01-21T06:15:00Z',
    details: 'New variant detected in downtown area. Enhanced testing protocols initiated.',
  },
  {
    id: '3',
    title: 'RSV Cases Rising',
    region: 'Eastern County',
    cases: 89,
    severity: 'medium',
    timestamp: '2025-01-20T14:20:00Z',
    details: 'Respiratory syncytial virus showing steady increase among pediatric population.',
  },
  {
    id: '4',
    title: 'Measles Alert',
    region: 'Southern Region',
    cases: 45,
    severity: 'medium',
    timestamp: '2025-01-20T10:45:00Z',
    details: 'Unvaccinated community showing elevated measles transmission. Vaccination campaign underway.',
  },
  {
    id: '5',
    title: 'Mumps Detection',
    region: 'Western District',
    cases: 23,
    severity: 'low',
    timestamp: '2025-01-19T16:30:00Z',
    details: 'Isolated mumps cases reported in two schools. Contact tracing in progress.',
  },
  {
    id: '6',
    title: 'Norovirus Monitoring',
    region: 'Coastal Area',
    cases: 18,
    severity: 'low',
    timestamp: '2025-01-19T09:00:00Z',
    details: 'Seasonal norovirus activity within expected range. No intervention required at this time.',
  },
];
