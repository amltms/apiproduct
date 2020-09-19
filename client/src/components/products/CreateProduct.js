import React, {useState} from 'react';
import Axios from "axios";
import {useHistory} from "react-router-dom";

import {ErrorMsg} from "../ErrorMsg";

export const CreateProduct = () =>{
    const history = useHistory();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: ''
    });
    const [error, setError] = useState();

    const onChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
           await Axios.post("/products", product) ;
           history.push("/products");
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
            <form onSubmit={onSubmit} name="createProductForm">
                <input onChange={onChange} name="name" type="text" placeholder="Product Name"/>
                <input onChange={onChange} name="description" type="text" placeholder="Product Description"/>
                <input onChange={onChange} name="price" type="text" placeholder="Product Price"/>
                <input type="submit" value="Add Product" />
            </form>    
        </>
    )
}