'use client'
import { ResponsiveBar } from '@nivo/bar'

const data = [
  {
    "metric": "GL Rework Rate",
    "before": 60,
    "after": 20,
    "improvement": 40
  }
]

const NIVO_DARK_THEME = {
  background: 'transparent',
  axis: {
    domain: { line: { stroke: '#475569' } },
    ticks: { line: { stroke: '#475569' }, text: { fill: '#CBD5E1' } },
    legend: { text: { fill: '#E2E8F0', fontSize: 14 } },
  },
  grid: { line: { stroke: '#1F2937', strokeDasharray: '6 6' } },
  labels: { text: { fill: '#E2E8F0' } },
}

export default function QuantitativeBarChart() {
  return (
    <div className="h-96 w-full bg-gray-900 rounded-lg p-4 border border-cyan-800/50">
      <h3 className="text-xl font-semibold text-cyan-400 mb-4">
        SAP FI: Process Efficiency Improvement
      </h3>
      <ResponsiveBar
        data={data}
        keys={['before', 'after']}
        indexBy="metric"
        margin={{ top: 10, right: 30, bottom: 50, left: 60 }}
        padding={0.3}
        colors={['#EF4444', '#10B981']}
        theme={NIVO_DARK_THEME}
        animate={true}
        enableLabel={false}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Performance Metrics',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Percentage',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'top-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
          }
        ]}
      />
    </div>
  )
}