import React, { useState } from 'react'
import './Login.css'
import {auth, provider } from '../firebase'
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [state, dispatch] = useStateValue()
    const {user} = state
    const navigate = useNavigate()


    const signIn = (e) =>{
        signInWithPopup(auth,provider)
        .then((result)=>{
            // console.log('dispatching')
            dispatch({
                type : actionTypes.SET_USER,
                user : result.user
            })
            navigate('/')
        }) 
        .catch((error)=>{
            alert(error.message)
        })
        // console.log('Email is : ', email)
        // console.log('password is : ', password)

    }

    return (
        <div className='login' >
            <div className="login_body">
                <div className='login_info' >
                    <img src="https://png2.cleanpng.com/sh/15647834987f7ac20a661c008f16286b/L0KzQYm3VsIzN5hqjJH0aYP2gLBuTfdwd5hxfZ91b3fyPbj2jBdtbaFxfeo2Z3Byd73sTgNmaaNogJ8AYkLmdIjthMY3aWoASpC6NEW6RIO8VME2Omo7TqcAM0O3QoG8TwBvbz==/kisspng-google-logo-googleplex-google-search-5b2cd7fd66a992.1457425415296655334205.png" alt="" className="login_logo" />
                    <h3>Sign in</h3>
                    <p>to continue to YouTube</p>
                    <button onClick={(e)=>{signIn(e)}} className='login_button'  type='submit' >Sign In</button>
                </div>
            </div>
        </div>
    )
}
