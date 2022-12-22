// import React from 'react'

// const ChartMd = () => {
//   return (
//     <div>ChartMd</div>
//   )
// }

// export default ChartMd

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { chartData } from "../../data/one-day-chart-data/bitcoin_market_chart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

// ChartJS.register(
//    CategoryScale,
//    LinearScale,
//    PointElement,
//    LineElement,
//    Title,
//    Tooltip,
//    Legend
//  );

const options = {
  responsive: true,
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 0,
    },
  },
};

const labels = chartData.prices
  .filter((_data, i) => i % 12 === 0)
  .map((data) => {
    return new Date(data[0]).getHours();
  });

console.log(labels);

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Bitcoin",
//       data: chartData.prices.map((data) => {
//         return data[1].toLocaleString("en-US", {
//           style: "currency",
//           currency: "USD",
//         });
//       }),
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//   ],
// };

const colorCode = {
  blue: { borderColor: "rgb(2,122,221)", backgroundColor: "rgb(60,64,245)" },
  red: {
    borderColor: "rgb(255, 99, 132)",
    backgroundColor: "rgba(255, 99, 132, 0.5)",
  },
  green: {
    borderColor: "rgb(88,187,121)",
    backgroundColor: "rgb(57,156,90)",
  },
};

export default function ChartMd(props) {
  const data = {
    labels,
    datasets: [
      {
        data: chartData.prices
          .filter((_data, i) => i % 12 === 0)
          .map((data) => {
            return data[1];
          }),

        borderColor: `${colorCode[props.color].borderColor}`,
        backgroundColor: `${colorCode[props.color].backgroundColor}`,
      },
    ],
  };
  return <Line options={options} data={data} />;
}
