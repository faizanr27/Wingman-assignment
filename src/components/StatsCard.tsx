import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change: number;
  prefix?: string;
}

export function StatsCard({ title, value, change, prefix = '' }: StatsCardProps) {
  const isPositive = change > 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <p className="text-sm text-gray-500 uppercase tracking-wider">{title}</p>
      <div className="mt-2 flex items-baseline">
        {prefix && <span className="text-2xl font-semibold">{prefix}</span>}
        <span className="text-3xl font-bold">{value}</span>
      </div>
      <div className="mt-2 flex items-center">
        {isPositive ? (
          <ArrowUpIcon className="w-4 h-4 text-green-500" />
        ) : (
          <ArrowDownIcon className="w-4 h-4 text-red-500" />
        )}
        <span className={`ml-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {Math.abs(change)}% {isPositive ? 'increase' : 'decrease'}
        </span>
      </div>
    </div>
  );
}