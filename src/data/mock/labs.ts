export interface Lab {
  id: string;
  name: string;
  testsCount: number;
  avgTATHours: number;
  delayStatus: 'on-time' | 'moderate' | 'delayed';
}

export const labs: Lab[] = [
  {
    id: '1',
    name: 'Central Diagnostics Lab',
    testsCount: 1248,
    avgTATHours: 12,
    delayStatus: 'on-time',
  },
  {
    id: '2',
    name: 'Metro Health Testing Center',
    testsCount: 892,
    avgTATHours: 18,
    delayStatus: 'moderate',
  },
  {
    id: '3',
    name: 'Regional Medical Laboratory',
    testsCount: 756,
    avgTATHours: 24,
    delayStatus: 'delayed',
  },
  {
    id: '4',
    name: 'City Hospital Lab',
    testsCount: 634,
    avgTATHours: 14,
    delayStatus: 'on-time',
  },
  {
    id: '5',
    name: 'Precision Diagnostics',
    testsCount: 521,
    avgTATHours: 16,
    delayStatus: 'moderate',
  },
  {
    id: '6',
    name: 'QuickTest Laboratory',
    testsCount: 389,
    avgTATHours: 10,
    delayStatus: 'on-time',
  },
];
