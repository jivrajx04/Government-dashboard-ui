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
    title: 'Dengue Outbreak',
    region: 'Mumbai',
    cases: 342,
    severity: 'high',
    timestamp: '2025-01-21T08:30:00Z',
    details: 'Significant spike in dengue cases across Mumbai over the past 72 hours. Immediate containment and fumigation measures recommended.',
  },
  {
    id: '2',
    title: 'Influenza Cluster',
    region: 'Pune',
    cases: 228,
    severity: 'high',
    timestamp: '2025-01-21T06:15:00Z',
    details: 'Seasonal influenza showing rapid spread in Pune district. Enhanced testing protocols and public awareness campaign initiated.',
  },
  {
    id: '3',
    title: 'COVID-19 Cases Rising',
    region: 'Nagpur',
    cases: 156,
    severity: 'high',
    timestamp: '2025-01-21T04:20:00Z',
    details: 'New COVID-19 variant detected in Nagpur region. Enhanced surveillance and testing underway.',
  },
  {
    id: '4',
    title: 'Malaria Alert',
    region: 'Thane',
    cases: 89,
    severity: 'medium',
    timestamp: '2025-01-20T14:20:00Z',
    details: 'Malaria cases showing steady increase in Thane district. Vector control operations intensified.',
  },
  {
    id: '5',
    title: 'RSV Monitoring',
    region: 'Nashik',
    cases: 67,
    severity: 'medium',
    timestamp: '2025-01-20T10:45:00Z',
    details: 'Respiratory syncytial virus showing elevated transmission among pediatric population in Nashik.',
  },
  {
    id: '6',
    title: 'Measles Detection',
    region: 'Aurangabad',
    cases: 45,
    severity: 'medium',
    timestamp: '2025-01-20T08:30:00Z',
    details: 'Unvaccinated communities showing measles transmission. Emergency vaccination drive launched in Aurangabad.',
  },
  {
    id: '7',
    title: 'Typhoid Cases',
    region: 'Kolhapur',
    cases: 34,
    severity: 'low',
    timestamp: '2025-01-19T16:30:00Z',
    details: 'Isolated typhoid cases reported in Kolhapur. Water quality testing and contact tracing in progress.',
  },
  {
    id: '8',
    title: 'Hepatitis A Monitoring',
    region: 'Solapur',
    cases: 23,
    severity: 'low',
    timestamp: '2025-01-19T14:15:00Z',
    details: 'Hepatitis A cases detected in Solapur district. Sanitation awareness campaign underway.',
  },
  {
    id: '9',
    title: 'Chikungunya Watch',
    region: 'Satara',
    cases: 18,
    severity: 'low',
    timestamp: '2025-01-19T09:00:00Z',
    details: 'Seasonal chikungunya activity within expected range in Satara. Preventive measures communicated to public.',
  },
];
