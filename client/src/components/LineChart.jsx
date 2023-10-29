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
  
  const { products, getTotalPricePerCategory, getTotalQuantityPerCategory } = useContext(ProductContext);
  
  const totalPricesPerCategory = getTotalPricePerCategory(products);
  const totalQuantityPerCategory = getTotalQuantityPerCategory(products);

  // get the product names from the table and store it in a variable
  const productCategory = []
  products.map(product => (
    productCategory.push(product.category)
  ))

  const data = {
    labels: productCategory,
    datasets: [
      {
        label:'Category Prices',
        data: totalPricesPerCategory,
        backgroundColor: 'rgba(54, 162, 235, 0.6)', 
      },
      {
        label:'Category Quantity',
        data: totalQuantityPerCategory,
        backgroundColor: 'red', 
      }
    ]
  }

  const options = {

  }

  return (
    <div className="bg-white shadow-sm p-5 w-full h-fit mx-auto">
      <p>Hello</p>

      <Line
        options={options}
        data={data}
      />
    </div>
  );
}

export default LineChartComponent;