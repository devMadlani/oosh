import React, { createContext } from "react";

// Create the ProductContext
const ProductContext = createContext();

// ProductProvider component to provide the products
const ProductProvider = ({ children }) => {
    const item = [
        {
          img: "/images/products.png",
          title: "Oosh! Classic: Eye Lid & Lash Cleanser",
          desc: "For use with all eyelids and lashes. Envisioned and designed by an eye doctor, with a custom formula created by a team of experts!",
          price: "$25.00",
        },
        {
          img: "/images/products.png",
          title: "Oosh! Classic: Eye Lid & Lash Cleanser",
          desc: "For use with all eyelids and lashes. Envisioned and designed by an eye doctor, with a custom formula created by a team of experts!",
          price: "$25.00",
        },
        {
          img: "/images/products.png",
          title: "Oosh! Classic: Eye Lid & Lash Cleanser",
          desc: "For use with all eyelids and lashes. Envisioned and designed by an eye doctor, with a custom formula created by a team of experts!",
          price: "$25.00",
        },
        {
          img: "/images/products.png",
          title: "Oosh! Classic: Eye Lid & Lash Cleanser",
          desc: "For use with all eyelids and lashes. Envisioned and designed by an eye doctor, with a custom formula created by a team of experts!",
          price: "$25.00",
        },
        {
          img: "/images/products.png",
          title: "Oosh! Classic: Eye Lid & Lash Cleanser",
          desc: "For use with all eyelids and lashes. Envisioned and designed by an eye doctor, with a custom formula created by a team of experts!",
          price: "$25.00",
        },
      ];

  return (
    <ProductContext.Provider value={item}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
