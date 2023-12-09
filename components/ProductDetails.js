// ASSIGNMENT6
// WEBSITE: https://a6-livid.vercel.app/
// Name: Dai Dung Lam
// Student ID: 137 632 196
// Date: 12/09/2023
// Section: NDD 

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Modal from "@/components/Modal";
import { app, getDatabase, ref, push, set, child } from "./FireBaseConfig";

export default function ProductExport() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product) =>{
    const database = getDatabase(app);
    const cartRef = ref(database, 'product');

    
    const timestamp = new Date().getTime();

    // Reference the child node with the timestamp as the key
    const productRef = child(cartRef, timestamp.toString());
  
    // Push the product data to the database
    set(productRef, {
      title: product.title,
      price: product.price,
      description: product.description,
    });
    
    closeModal();
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Fetch data only on the client side
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "3%" }}>
        Product Information
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridGap: "20px",
          placeItems: "center",
        }}
      >
        {products.map((product) => (
          <div
            style={{
              textAlign: "center",
              border: "3px solid #ccc",
              padding: "10px",
            }}
            key={product.id}
          >
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rate : ${product.rating.rate}</p>
            <p>Count: ${product.rating.count}</p>
            <img
              src={product.image}
              width="200"
              height="200"
              alt={product.title}
            />
            <button type="button" onClick={() => openModal(product)}>
              Add to Cart
            </button>

            {selectedProduct && (
              <Modal isOpen={true} onClose={closeModal}>
                <>
                  <h2>{selectedProduct.title}</h2>
                  <p>{selectedProduct.description}</p>
                  <p>Price: ${selectedProduct.price}</p>
                  <p>Rate : ${selectedProduct.rating.rate}</p>
                  <p>Count: ${selectedProduct.rating.count}</p>
                  <button onClick={closeModal} style={{ marginRight: 20 }}>Close</button>
                  {/* <Link
                    href={{
                      pathname: ,
                      query: { title: selectedProduct.title , price: selectedProduct.price, desc: selectedProduct.description},
                    }}
                  >
                    <button type="button" onClick={() => console.log(selectedProduct)}>Add to Cart</button>
                  </Link> */}
                  <button
                    type="button"
                    onClick={() => addToCart(selectedProduct)}
                  >
                    Add to Cart
                  </button>
                </>
              </Modal>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
