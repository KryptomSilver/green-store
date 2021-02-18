import React from "react";
import { Product } from "./Product";

interface Props {
  product: Product;
}
const ProductItem = ({ product }: Props) => {
    return (
        <div key="{product._id}">
        <h1>{product.name_product}</h1>
        <p>{product.description}</p>
        <p>{product.type_product}</p>
        <p>{product.stock}</p>
      </div>
    )
}

export default ProductItem
