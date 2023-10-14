import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from "react-chartjs-2";

ChartJS.register(
   LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
)

const LineChartComponent = () => {

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thur'],
    datasets: [
      {
        label:'3,6,9,4',
        data: [3,6,9,4],
        backgroundColor: 'red',
      }
    ]
  }

  const options = {

  }

  return (
    <div className="shadow-md p-10 w-1/2 mx-auto">
      <p>LineChart</p>

      <div>
        <Line
        data={data}
        options={options}
        >
        </Line>
      </div>

    </div>
  );
}

export default LineChartComponent;
