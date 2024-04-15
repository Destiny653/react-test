import React, { useEffect, useState } from 'react';
import style from "./css/main.module.css";
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Home() {

    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(()=>{
        const apoProduct = async ()=>{
            await axios.get('https://fakestoreapi.com/products').then((result)=>{
                setProducts(result.data);
            }).catch(err=>{
                console.log(err);
            })
        }
        apoProduct();
    },[])

  return (
    <>
       <header className={style.header}>
        <div className={style.headChild}>
            <h1 className={style.title}>Free E-Commerce Website.</h1>
            <h1 className={style.description}>All gadgets available in the store. Take a tore of the website.</h1>
        </div>
       </header>

        <div className={style.Products}>
            {
                products.map((product,index)=>{
                    return(
                        <div className={style.product} key={index}>
                            <h1 className={style.category} >{product.category}</h1>
                            <img  src={product.image} alt={product.name} className={style.productImage} width="100%" />
                            <div className={style.productInfo}>
                                <h1 className={style.productName}>{product.title.slice(0,20)}</h1>
                                <p className={style.proDescription}>{product.description.slice(0,80)}</p>
                                <h1 className={style.productPrice}>${product.price}.00</h1>
                                <Link className={style.link} to={`/detail/${product.id}`}><button className={style.btnDetail}>Detail</button></Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}
