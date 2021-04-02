import React from "react";
import { Product } from "./Product";

interface Props {
  product: Product;
}
const ProductItem = ({ product }: Props) => {
  return (
    <tr key="{product._id}" >
      <td>{product.name_product}</td>
      <td>{product.description}</td>
      <td>{product.type_product}</td>
      <td>
        <div className="d-flex justify-content-center align-items-center">
        <a href="" className="btn btn-danger ">Borrar</a>
        <a href="" className="btn btn-info ml-3 ">Editar</a>
        </div>
        
      </td>
    </tr>
  );
};

export default ProductItem;
