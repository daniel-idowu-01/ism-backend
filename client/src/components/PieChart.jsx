import React, { useContext } from "react";
import ProductContext from '../context/Products'
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

  const { products } = useContext(ProductContext);

  // get the product names from the table and store it in a variable
  const productNames = []
  products.map(product => (
    productNames.push(product.name)
  ))

  // get the product quantity from the table and store it in a variable
  const productQuantity = []
  products.map(product => (
    productQuantity.push(product.quantity)
  ))

  const data = {
    labels: productNames,
    datasets: [
      {
        label:'Quantity of Products',
        data: productQuantity,
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
      <p className="text-xl">Most Avaliable Products</p>

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
