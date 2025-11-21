export interface Provider {
  id: string;
  name: string;
  specialization: string;
  appointmentsToday: number;
}

export const providers: Provider[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    specialization: 'Infectious Disease',
    appointmentsToday: 24,
  },
  {
    id: '2',
    name: 'Dr. James Chen',
    specialization: 'Internal Medicine',
    appointmentsToday: 32,
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialization: 'Pediatrics',
    appointmentsToday: 28,
  },
  {
    id: '4',
    name: 'Dr. Michael Thompson',
    specialization: 'Emergency Medicine',
    appointmentsToday: 18,
  },
  {
    id: '5',
    name: 'Dr. Lisa Patel',
    specialization: 'Pulmonology',
    appointmentsToday: 22,
  },
  {
    id: '6',
    name: 'Dr. Robert Kim',
    specialization: 'Family Medicine',
    appointmentsToday: 36,
  },
];

export const providerKpis = {
  totalAppointmentsToday: 160,
  avgDoctorLoad: 26.7,
  hospitalFootfall: 342,
  topSpecialty: 'Family Medicine',
};
