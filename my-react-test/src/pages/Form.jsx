import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './css/main.module.css'
import users from './user'

export default function Form() {

    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    console.log(password);

    const nav = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        users.find((use) =>{
            const user = use.email === email && use.password === password && use.name === name;
            console.log(user);
            if(user){
                nav('/home');
            }else{alert("incorrect sign in")}
        })
}


    return (
        <>
            <div className={style.formParent}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <label className={style.formLabel}>
                        <h1>name</h1>
                        <input className={style.formInput} onChange={(e)=>{setName(e.target.value)}} type="text" name="name" id="name" placeholder='input name' />
                    </label>
                    <label className={style.formLabel}>
                        <h1>email</h1>
                        <input className={style.formInput} onChange={(e)=>{setEmail(e.target.value)}} type="text" name="email" id="email" placeholder='example@gmail.com' />
                    </label>
                    <label className={style.formLabel}>
                        <h1>password</h1>
                        <input className={style.formInput} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" id="password" placeholder='*********' />
                    </label>
                    <button className={style.formBtn} >Submit</button>
                </form>
            </div>
        </>
    )
}
