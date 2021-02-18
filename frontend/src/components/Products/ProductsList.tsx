import React, { useEffect,useState } from 'react'
import {Product} from './Product'
import ProductItem from './ProductItem'
import * as VideoService from './ProductService'
export const ProductsList = () => {
    
    const [products, setProducts] = useState<Product[]>([])
    const loadProducts = async () =>{
        const res = await VideoService.getProducts()
        setProducts(res.data);
    }
    useEffect(() => {
        loadProducts()
    }, [])
    return (
        <div>
            {products.map((product) =>{
                return <ProductItem product={product}/>
            })}
        </div>
    )
}
