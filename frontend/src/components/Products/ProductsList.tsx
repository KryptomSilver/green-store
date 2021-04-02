import React, { useEffect, useState } from "react";
import { Product } from "./Product";
import ProductItem from "./ProductItem";
import * as VideoService from "./ProductService";
export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const loadProducts = async () => {
    const res = await VideoService.getProducts();
    setProducts(res.data);
  };
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div className="container"key="1">
      <div className="row">
        <div className="col">
          <h1 className="text-center text-white">Productos</h1>
        </div>
      </div>
        <div className="d-flex align-items-center justify-content-end">
            <a href="" className="btn btn-success btn-md">Agregar</a>
        </div>
      <div className="row">
        <div className="col">
          <table className="table table-responsive-sm table-responsive-md table-responsive-lg table-hover table-striped bg-primary border-primary table-bordered">
            <thead>
              <tr>
                <th className="text-center">Nombre Producto</th>
                <th className="text-center">Descripción</th>
                <th className="text-center">Tipo</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return <ProductItem product={product} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
