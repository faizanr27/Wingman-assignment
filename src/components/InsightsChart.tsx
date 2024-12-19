"use client"

import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const weeklyData = [
  { day: "Mon", incoming: 32, answered: 28, expertsOnline: 25 },
  { day: "Tue", incoming: 35, answered: 25, expertsOnline: 22 },
  { day: "Wed", incoming: 40, answered: 32, expertsOnline: 30 },
  { day: "Thu", incoming: 45, answered: 44, expertsOnline: 35 },
  { day: "Fri", incoming: 48, answered: 35, expertsOnline: 28 },
  { day: "Sat", incoming: 52, answered: 34, expertsOnline: 30 },
  { day: "Sun", incoming: 55, answered: 36, expertsOnline: 32 },
]

const comparisonData = [
  {
    period: "This week",
    consultations: 20,
    ordersClosed: 15,
  },
  {
    period: "Last week",
    consultations: 15,
    ordersClosed: 10,
  },
]

export default function InsightsChart() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-normal text-gray-500">CONSULTATIONS</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              incoming: {
                label: "Incoming",
                color: "hsl(var(--muted-foreground))",
              },
              answered: {
                label: "Answered",
                color: "hsl(var(--primary))",
              },
              expertsOnline: {
                label: "Experts online",
                color: "hsl(var(--warning))",
              },
            }}
            className="h-[300px]"
          >
            <LineChart
              data={weeklyData}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <XAxis
                dataKey="day"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                yAxisId="left"
                orientation="left"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="incoming"
                stroke="var(--color-incoming)"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="answered"
                stroke="var(--color-answered)"
                strokeWidth={2}
                dot={false}
              />
              <Bar
                yAxisId="left"
                dataKey="expertsOnline"
                fill="rgba(255, 234, 138, 0.25)"
                radius={[4, 4, 0, 0]}
              />
            </LineChart>
          </ChartContainer>
          <div className="mt-4 flex items-center justify-start gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-4 border border-dashed border-muted-foreground" />
              <span>Incoming</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-4 bg-primary" />
              <span>Answered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-4 rounded bg-[rgba(255,234,138,0.25)]" />
              <span>Experts online</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base font-normal text-gray-500">VS PAST PERIOD</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              consultations: {
                label: "Consultations",
                color: "hsl(var(--mint))",
              },
              ordersClosed: {
                label: "Orders closed",
                color: "hsl(var(--primary))",
              },
            }}
            className="h-[300px]"
          >
            <BarChart
              data={comparisonData}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <XAxis
                dataKey="period"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="consultations" fill="hsl(165, 80%, 95%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="ordersClosed" fill="hsl(165, 80%, 25%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
          <div className="mt-4 flex items-center justify-start gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-3 w-4 rounded bg-[hsl(165,80%,95%)]" />
              <span>Consultations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-4 rounded bg-[hsl(165,80%,25%)]" />
              <span>Orders closed</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

