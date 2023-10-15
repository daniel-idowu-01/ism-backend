import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from "react-chartjs-2";

ChartJS.register(
   BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

const BarChartComponent = () => {

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thur'],
    datasets: [
      {
        label:'3,6,9,4',
        data: [3,6,9,4],
        backgroundColor: 'red',
      },
      {
        label:'1,2,3,4',
        data: [1,2,3,4],
        backgroundColor: 'blue',
      }
    ]
  }

  const options = {

  }

  return (
    <div className="shadow-md p-10 w-full sm:w-1/2 h-fit mx-auto">
      <p className="text-xl">BarChart</p>

      <div className="relative top-5">
        <Bar
        className=" border-2 p-2 "
        data={data}
        options={options}
        >
        </Bar>
      </div>

    </div>
  );
}

export default BarChartComponent;
