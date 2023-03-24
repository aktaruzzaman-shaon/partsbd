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

    

    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = async (data) => {
        // console.log(data);
        const mail = data.mail;
        const password = data.password;
        // console.log(data);
        await signInWithEmailAndPassword(mail, password);
    };

    if (user) {
        console.log(user);
    }
    else {
        console.log('USer not found');
    }


    return (
        <div className="card  mt-20 mx-auto w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center">Login</h2>
                <form name='loginForm' onSubmit={handleSubmit(handleLogin)}>

                    <input
                        type="text"
                        className='input input-bordered w-full max-w-xs' placeholder='Email'
                        {...register("mail", { required: "Email Address is required" })}
                        aria-invalid={errors.mail ? "true" : "false"}
                    />
                    {errors.mail && <p role="alert">{errors.mail?.message}</p>}

                    <input
                        type="text"
                        className='input input-bordered w-full max-w-xs mt-5' placeholder='Password'
                        {...register("password", { required: "Password is required" })}
                        aria-invalid={errors.password ? "true" : "false"}
                    />
                    {errors.password && <p role="alert">{errors.password?.message}</p>}

                    <input type="submit" value="login" className="btn w-full mt-5" />

                </form>
                <div className="divider">OR</div>

                <input type="submit" value="Continune with Google" className="btn w-full mt-5" />
            </div>
        </div>
    );
};

export default Login;