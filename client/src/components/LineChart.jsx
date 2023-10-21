import React, { useContext } from "react";
import ProductContext from '../context/Products'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2';

ChartJS.register(
   LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

const LineChartComponent = () => {
  
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
    <div>
      <p>Hello</p>

      <Line
        options={options}
        data={data}
      />
    </div>
  );
}

export default LineChartComponent;