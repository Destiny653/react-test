import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import style from './css/main.module.css'

export default function Detail() {

    const [product, setProducts] = useState([]);
    console.log(product);
    const { id } = useParams()


    useEffect(() => {
        const apoProduct = async () => {
            await axios.get(`https://fakestoreapi.com/products/${id}`).then((result) => {
                setProducts(result.data);
            }).catch(err => {
                console.log(err);
            })
        }
        apoProduct();
    }, [])


    return (
        <>

            <header className={style.header}>
                <div className={style.headChild}>
                    <h1 className={style.title}>Free E-Commerce Website.</h1>
                    <h1 className={style.description}>All gadgets available in the store. Take a tore of the website.</h1>
                    <h1 className={style.title}>{product.category}</h1>
                </div>
            </header>

            <div className={style.detailContainer}>
                <div className={style.detail} key={product.id}>
                    <div className={style.section1}>
                        <h1 className={style.categoryDtl} >{product.category}</h1>
                        <img src={product.image} alt={product.name} className={style.detailImage} width="100%" />
                    </div>
                    <div className={style.detailInfo}>
                        <h1 className={style.detailName}>{product.title}</h1>
                        <p className={style.detailDescription}>{product.description}</p>
                        <h1 className={style.detailPrice}>${product.price}.00</h1>
                        <Link className={style.link} to={`/`}><button className={style.btnDetail2}>Home</button></Link>
                    </div>
                </div>
            </div>

        </>
    )
}
