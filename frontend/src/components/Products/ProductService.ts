
import axios from 'axios'
export const getProducts = async() =>{
    return await axios.get("http://localhost:4000/api/products")
}