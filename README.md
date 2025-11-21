# Government-dashboard-ui
government/NGO ui dashboard

## Running the Project Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Mock Data Location

All mock data is stored in `src/data/mock/`:
- `src/data/mock/alerts.ts` - Health alert data
- `src/data/mock/chartData.ts` - Dashboard chart data
- `src/data/mock/kpiData.ts` - KPI metrics
- `src/data/mock/labs.ts` - Laboratory testing centers
- `src/data/mock/providers.ts` - Healthcare providers

## Changing Mock Data

To modify mock data:
1. Navigate to the appropriate file in `src/data/mock/`
2. Edit the exported arrays/objects
3. Changes will be reflected immediately in the UI

## Routes

The application includes the following routes (already configured in `src/App.tsx`):
- `/login` - Authentication page
- `/dashboard` - Main dashboard with KPIs and charts
- `/alerts` - Health alerts grouped by severity
- `/labs` - Laboratory testing centers table
- `/providers` - Healthcare providers with KPIs
