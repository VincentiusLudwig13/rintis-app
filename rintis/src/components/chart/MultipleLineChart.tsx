import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';
import ChartData from '@/types/ChartTypes';

export function MultipleLineChart({ data }: { data: ChartData[] }) {
  const chartData = data.map((item) => {
    const dateObj = new Date(item.date);
    return {
      date: item.date,
      displayDate: dateObj.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
      }),
      income: item.income,
      outcome: item.outcome,
    };
  });

  const chartConfig = {
    income: {
      label: 'Pemasukan',
      color: '#4A3AFF',
    },
    outcome: {
      label: 'Pengeluaran',
      color: '#ef4444',
    },
  } satisfies ChartConfig;

  return (
    <div className="w-full">
      <div className="overflow-x-auto pb-4">
        <div className="min-w-[800px]">
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: -15,
                right: 12,
                top: 20,
              }}
            >
              <CartesianGrid vertical={false} />

              <XAxis
                dataKey="displayDate"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />

              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) =>
                  new Intl.NumberFormat('id-ID', {
                    notation: 'compact',
                    compactDisplay: 'short',
                  }).format(value)
                }
                style={{
                  fontSize: '12px',
                  fill: 'var(--text-muted)',
                }}
              />

              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />

              <Line
                dataKey="income"
                type="monotone"
                stroke="var(--color-income)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="outcome"
                type="monotone"
                stroke="var(--color-outcome)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
