
import { ExternalLinkIcon } from 'lucide-react';
import avatar from '../assets/Avatar.png'
interface Order {
  id: number;
  productName: string;
  date: string;
  timeSpent: string;
  orderValue: number;
  commission: number;
}

const orders: Order[] = [
  {
    id: 1,
    productName: "Product Name 1",
    date: "24 Apr '2024",
    timeSpent: "2h 5m",
    orderValue: 120.21,
    commission: 55
  },
  {
    id: 2,
    productName: "Product Name 2",
    date: "24 Apr '2024",
    timeSpent: "2h 5m",
    orderValue: 120.21,
    commission: 55
  },
  {
    id: 3,
    productName: "Product Name 3",
    date: "24 Apr '2024",
    timeSpent: "2h 5m",
    orderValue: 120.21,
    commission: 55
  },
  {
    id: 4,
    productName: "Product Name 4",
    date: "24 Apr '2024",
    timeSpent: "2h 5m",
    orderValue: 120.21,
    commission: 55
  }
];

export function OrdersTable() {
  return (
    <div className="bg-white rounded-lg shadow-sm mt-8">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Orders</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="px-6 py-3">Product</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Time spent</th>
              <th className="px-6 py-3">Order Value</th>
              <th className="px-6 py-3">Commission</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-gray-100">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img src={avatar} className="h-10 w-10 flex-shrink-0 bg-gray-100 rounded-full" />
                    <span className="ml-4 text-sm font-medium text-gray-900">{order.productName}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{order.timeSpent}</td>
                <td className="px-6 py-4 text-sm text-gray-900">${order.orderValue}</td>
                <td className="px-6 py-4 text-sm text-gray-900">${order.commission}</td>
                <td className="px-6 py-4 text-right">
                  <div className=' flex flex-row gap-4'>
                    <p>View Chat</p>
                  <button className="text-gray-400 hover:text-gray-500">
                    <ExternalLinkIcon className="w-5 h-5" />
                  </button>
                  </div>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}