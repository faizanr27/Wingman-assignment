import { StatsCard } from './StatsCard';
import { InsightsChart } from './InsightsChart';
import { OrdersTable } from './OrdersTable';
import { ForecastCard } from './ForecastCard';

const Main = () => {
    return (
        <div className='border border-gray-300 px-4 py-8 rounded-2xl shadow-xl mt-10'>
        {/* Main content */}
      <div className="">
      <div className="">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">At a glance</h1>
          </div>
          <div>
            <select className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>7 days</option>
              <option>30 days</option>
              <option>12 months</option>
            </select>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Consultations"
            value="24"
            change={15}
          />
          <StatsCard
            title="Orders Placed"
            value="12"
            change={-15}
          />
          <StatsCard
            title="Conversion"
            value="50%"
            change={-15}
          />
          <StatsCard
            title="Total Sales Value"
            value="2,400"
            prefix="$"
            change={15}
          />
          <StatsCard
            title="Avg Order Value"
            value="240"
            prefix="$"
            change={15}
          />
          <StatsCard
            title="Commission Paid"
            value="240"
            prefix="$"
            change={15}
          />
        </div>

        {/* Insights Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Insights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {/* <InsightsChart /> */}
            </div>
            <div className="space-y-4">
              <ForecastCard
                percentage={15}
                description="forecasted increase in your sales closed by the end of the current month"
              />
              <ForecastCard
                percentage={20}
                description="forecasted increase in consultations by the end of the current month"
              />
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <OrdersTable />
      </div>
    </div>
    </div>
    )
}

export default Main