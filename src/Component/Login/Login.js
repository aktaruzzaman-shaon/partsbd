import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        console.log(user);
    }

    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = (data) => {
        console.log(data);
        const name = data.name;
        const mail = data.mail;
        console.log(name, mail);
        signInWithEmailAndPassword(name, mail);
    };
    return (
        <div className="card  mt-20 mx-auto w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center">Login</h2>
                <form name='loginForm' onSubmit={handleSubmit(handleLogin)}>
                    <input
                        type="text"
                        className='input input-bordered w-full max-w-xs mb-5' placeholder='Name'
                        {...register("name", { required: true })}
                        aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.Name?.type === 'required' && <p role="alert">First name is required</p>}

                    <input
                        type="text"
                        className='input input-bordered w-full max-w-xs' placeholder='Email'
                        {...register("mail", { required: "Email Address is required" })}
                        aria-invalid={errors.mail ? "true" : "false"}
                    />
                    {errors.mail && <p role="alert">{errors.mail?.message}</p>}

                    <input type="submit" value="login" className="btn w-full mt-5" />
                </form>
                <div className="divider">OR</div>

                <input type="submit" value="Continune with Google" className="btn w-full mt-5" />
            </div>
        </div>
    );
};

export default Login;