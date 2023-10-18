// @ts-nocheck
import { useState, createContext } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {

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
    
    return(
        <ProductContext.Provider value={{ products, setProducts, calculateTotalPrice, calculateTotalQuantity, totalQuantity, totalPrice, numberOfProducts }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;

