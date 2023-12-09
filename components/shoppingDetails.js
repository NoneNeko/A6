// ASSIGNMENT5

// Name: Dai Dung Lam
// Student ID: 137 632 196
// Date: 11/06/2023
// Section: NDD 

import { useSearchParams } from 'next/navigation'
import { app, getDatabase, ref, onValue, remove, get} from "./FireBaseConfig";


import React, { useEffect, useState } from 'react';

export default function ShoppingExport() {
  const searchParams = useSearchParams()
  const [productList, setProductList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const database = getDatabase(app);
    const productsRef = ref(database, 'product'); 

    
    
    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productListFromFirebase = Object.values(data);
        setProductList(productListFromFirebase);

        
        const totalPrice = productListFromFirebase.reduce(
          (acc, product) => acc + parseFloat(product.price),
          0
        );
        setTotalPrice(totalPrice);
      }
    });

   
    return () => unsubscribe();
  }, []);

  const handleRemoveAll = async () => {
    const database = getDatabase(app);
    const productsRef = ref(database, 'product');
  
    
    await remove(productsRef);
  
    
    const updatedProductsRef = ref(database, 'product');
    const updatedSnapshot = await get(updatedProductsRef);
    const updatedData = updatedSnapshot.val();
  
    if (updatedData) {
      const updatedProductList = Object.values(updatedData);
  
      
      setProductList(updatedProductList);
  
     
      const updatedTotalPrice = updatedProductList.reduce(
        (acc, product) => acc + parseFloat(product.price),
        0
      );
      setTotalPrice(updatedTotalPrice);
    }
  };
  
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {productList.map((product, index) => (
          <li key={index}>
            Title: {product.title} <br />
            Price: {product.price} <br />
            Description: {product.description} <br />
          </li>
        ))}
      </ul>
          <p>Total Price: ${parseFloat(totalPrice)}</p>
          <button onClick={handleRemoveAll}>Remove All</button>
    </div>
  );
}