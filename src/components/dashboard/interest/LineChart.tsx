import React, { useEffect, useRef } from "react";
import { Chart, registerables, TimeScale } from "chart.js";
Chart.register(...registerables);
interface LineChartProps {
  data: number[];
  labels: string[];
}

const LineChart: React.FC<LineChartProps> = ({ data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Line Chart",
                data: data,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderWidth: 1,
              },
            ],
          },
        });
      }
    }
  }, [data, labels]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
