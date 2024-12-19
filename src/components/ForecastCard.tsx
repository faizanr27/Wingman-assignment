import React from 'react';
import { TrendingUpIcon } from 'lucide-react';

interface ForecastProps {
  percentage: number;
  description: string;
}

export function ForecastCard({ percentage, description }: ForecastProps) {
  return (
    <div className="flex items-center space-x-2 bg-emerald-500 text-white p-4 rounded-lg">
      <div className="flex items-baseline">
        <span className="text-3xl font-bold">+{percentage}%</span>
      </div>
      <div className="flex items-center">
        <TrendingUpIcon className="w-5 h-5 mr-2" />
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}