import React, { useContext } from "react";
import ProductContext from '../context/Products'
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

  const { products } = useContext(ProductContext);

  // get the product names from the table and store it in a variable
  const productNames = []
  products.map(product => (
    productNames.push(product.name)
  ))

  // get the product prices from the table and store it in a variable
  const productPrices = []
  products.map(product => (
    productPrices.push(product.price)
  ))

  const data = {
    labels: productNames,
    datasets: [
      {
        label:'Product Prices',
        data: productPrices,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      }
    ]
  }

  const options = {

  }

  return (
    <div className="shadow-md p-10 w-full h-fit mx-auto">
      <p className="text-xl">Price of the Products</p>

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
