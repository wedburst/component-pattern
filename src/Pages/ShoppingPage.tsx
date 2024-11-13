import React from "react";
import ProductCard from "../components/ProductCard";
import { ProductImage, ProductoButtons, ProductTitle } from "../components";
import '../assets/styles/custom-styles.css'

const product = {
    id: 1,
    title: "Titulo producto",
    img: "https://placehold.co/700x400/EEE/31343C",
}

const ShoppingPage = () => {
  return (
    <div>
      {/* <ProductCard>
        <ProductCard.Title title="Titulo producto" />
        <ProductCard.Image/>
        <ProductoCard.Buttons />
      </ProductCard> */}

      <ProductCard product={product} className="bg-dark" style={{ padding: '5rem'}}>
        <ProductTitle title="Titulo producto" />
        <ProductImage img="https://placehold.co/700x400/EEE/31343C" />
        <ProductoButtons />
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
