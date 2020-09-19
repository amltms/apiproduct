import React, {useState, useEffect} from 'react';
import Axios from "axios";
import {ErrorMsg} from "../ErrorMsg";
import {useHistory} from "react-router-dom";

export const EditProduct = (props) =>{
    const history = useHistory();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: ''
    });

    const [error, setError] = useState();

    useEffect(() => {
        const getProduct = async () =>{
            try {
                const product = await Axios.get("/products/"+props.match.params.id);
                console.log(product.data.data);
                setProduct(product.data.data);
            } catch (error) {
                error.response.statusText && setError(error.response.statusText);
                console.log(error.response.statusText)
            }
        }
        getProduct();
    },[])

    const onChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
           await Axios.put(`/products/${props.match.params.id}`, product) ;
            history.push("/products/"+product._id);
        } catch (error) {
            error.response.data.error.message && setError(error.response.data.error.message);
            console.log(error.response.data.error.message);
        }
    }

    return(
        <>
            {error && (
                <ErrorMsg error={error} clearError={() => setError(undefined)} />
            )}
            <form onSubmit={onSubmit} name="editProductForm">
                <input onChange={onChange} value={product.name} name="name" type="text" placeholder="Product Name"/>
                <input onChange={onChange} value={product.description} name="description" type="text" placeholder="Product Description"/>
                <input onChange={onChange} value={product.price} name="price" type="text" placeholder="Product Price"/>
                <input type="submit" value="Edit Product" />
            </form>    
        </>
    )
}