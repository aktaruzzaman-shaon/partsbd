import React from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useToken from '../Hooks/useToken';
import { navigate, useNavigate } from 'react-router-dom';



const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();


    //for create user with email and password
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [token] = useToken(user);


    if (token) {
        navigate('/home');
    }

    //handle sing up
    const handleSignUp = (data) => {
        createUserWithEmailAndPassword(data.mail, data.password, data.name);
    }

    return (
        <div className="h-screen">
            <div className="card   mt-20 mx-auto w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">SignUp</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>
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

                        <input
                            type="password"
                            className='input input-bordered w-full max-w-xs mt-5' placeholder='Password'
                            {...register("password", { required: "Password is required" })}
                            aria-invalid={errors.mail ? "true" : "false"}
                        />
                        {errors.mail && <p role="alert">{errors.mail?.message}</p>}

                        <input type="submit" value="SingUp" className="btn w-full mt-5 bg-orange-300 text-black" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;