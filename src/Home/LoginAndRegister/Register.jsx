import React, { use } from 'react'
import { NavLink } from 'react-router';
import { Autchontex } from './Context/AuthContext';

const Register = () => {

    const {createUser} = use(Autchontex)

    const handalLogin = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({ password,name, email })


        // sign in firebase
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            // navigat(from)
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
                        name='name'
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full my-4" />
                </label>

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
                <h1 className='text-center my-4'>I Have a Accout   <NavLink to="/login" className="text-blue-950 btn"> Login </NavLink></h1>
            </div>
        </form>
    );
}

export default Register