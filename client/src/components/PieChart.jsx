import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Pie } from "react-chartjs-2";

ChartJS.register(
   ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
)

const PieChartComponent = () => {

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thur'],
    datasets: [
      {
        label:'Number of Products',
        data: [3,6,9,4],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
        ],
      }
    ]
  }

  const options = {

  }

  return (
    <div className="shadow-md p-10 w-full sm:w-1/2 h-fit mx-auto">
      <p>PieChart</p>

      <div>
        <Pie
        data={data}
        options={options}
        >
        </Pie>
      </div>

    </div>
  );
}

export default PieChartComponent;
