import React, { use } from 'react'
import {  NavLink, useNavigate } from 'react-router';
import { Autchontex } from './Context/AuthContext';

export const Login = () => {

    const {signInUser,signOutUser} = use(Autchontex)
    const navigate = useNavigate()
  


    const handalLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;


         // firebase load
        signInUser(email,password)
        .then(result => {
            console.log(result.user);
            navigate('/')
        })
        .catch(error => {
            console.log(error);
        })

    }
    

    return (
        <form onSubmit={handalLogin} >
            <div className='p-16 m-6 bg-blue-50 shadow-2xl rounded-2xl'>
                <label className="form-control w-full my-3">
                    <span className="label-text">Email</span>
                    <input
                        name='email'
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full my-4" />
                </label>

                <label className="form-control w-full my-4">
                    <span className="label-text">Password</span>
                    <input
                        name='password'
                        type="password"
                        placeholder="Enter your password"
                        className="input input-bordered w-full my-4" />
                </label>

                <button type="submit" className="btn btn-primary w-full">
                    Submit
                </button>
                <h1 className='text-center my-4'>I Have No Accout   <NavLink to="/register" className="text-blue-950 btn"> Register </NavLink></h1>
            </div>
        </form>
    );
}