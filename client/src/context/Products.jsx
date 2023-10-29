// @ts-nocheck
import { useState, createContext } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {

  const [showSideBar, setShowSideBar] = useState(false)
  const [products, setProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)

  const numberOfProducts = products.length;

    // Calculate the total price
  const calculateTotalPrice = () => {
    const sum = products.reduce((accumulator, product) => accumulator + parseInt(product.price), 0);
    setTotalPrice(sum);
    };
    
    // Calculate the total quantity
  const calculateTotalQuantity = () => {
    const sum = products.reduce((accumulator, product) => accumulator + parseInt(product.quantity), 0);
    setTotalQuantity(sum);
  };

  // to get the most expensive product
  const maxPrice = products.reduce(function(max, product) {
  return Math.max(max, product.price);
  }, -Infinity);
    
    return(
        <ProductContext.Provider value={{ maxPrice, products, setProducts, calculateTotalPrice, calculateTotalQuantity, totalQuantity, totalPrice, numberOfProducts, showSideBar, setShowSideBar }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;

