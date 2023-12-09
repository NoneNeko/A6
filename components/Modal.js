// ASSIGNMENT5

// Name: Dai Dung Lam
// Student ID: 137 632 196
// Date: 11/06/2023
// Section: NDD 

import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(255, 0, 0, 0.5)"
      }}
    >
      <div
        onClick={stopPropagation}
        style={{
          background: "white",
          height: 300,
          width: 500,
          margin: "auto",
          background: "rgba(255,255,255,1)",
          padding: "2%",
          border: "2px solid #000",
          borderRadius: "10px",
          boxShadow: "2px solid black",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
