
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart
} from 'recharts';

const ConsultationsChart = () => {
  // Sample data for the main chart
  const weeklyData = [
    { day: 'Mon', incoming: 32, answered: 28, expertsOnline: 8 },
    { day: 'Tue', incoming: 35, answered: 25, expertsOnline: 7 },
    { day: 'Wed', incoming: 40, answered: 32, expertsOnline: 9 },
    { day: 'Thu', incoming: 45, answered: 35, expertsOnline: 12 },
    { day: 'Fri', incoming: 48, answered: 45, expertsOnline: 8 },
    { day: 'Sat', incoming: 50, answered: 35, expertsOnline: 9 },
    { day: 'Sun', incoming: 54, answered: 38, expertsOnline: 10 }
  ];

  // Sample data for the comparison chart
  const comparisonData = [
    { period: 'This week', consultations: 20, ordersClosed: 15 },
    { period: 'Last week', consultations: 15, ordersClosed: 12 }
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex-grow bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Consultations</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={weeklyData}>
              <XAxis dataKey="day" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="expertsOnline"
                fill="#ffeeba"
                yAxisId="left"
                name="Experts online"
                opacity={0.5}
              />
              <Line
                type="monotone"
                dataKey="incoming"
                stroke="#6c757d"
                strokeDasharray="3 3"
                yAxisId="left"
                name="Incoming"
              />
              <Line
                type="monotone"
                dataKey="answered"
                stroke="#20c997"
                yAxisId="left"
                name="Answered"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="w-full lg:w-64 bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">VS Past Period</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={comparisonData}>
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="consultations"
                fill="#98f2dd"
                name="Consultations"
              />
              <Bar
                dataKey="ordersClosed"
                fill="#004d40"
                name="Orders closed"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ConsultationsChart;