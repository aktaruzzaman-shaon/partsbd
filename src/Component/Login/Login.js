import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const [loginUserName, setloginUserName] = useState('');
    const [loginUserEmail, setloginUserEmail] = useState('');

    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = (data) => {
        
        console.log(data);
       

    };

    return (
        <div className='flex justify-center items-center mt-5'>
            <div className='form-control w-full max-w-xs'>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <input
                        type="text"
                        className='input input-bordered w-full max-w-xs' placeholder='Name'
                        {...register("Name", { required: true })}
                        aria-invalid={errors.Name ? "true" : "false"}
                    />
                    {errors.Name?.type === 'required' && <p role="alert">First name is required</p>}

                    <input
                        type="text"
                        className='input input-bordered w-full max-w-xs' placeholder='Email'
                        {...register("mail", { required: "Email Address is required" })}
                        aria-invalid={errors.mail ? "true" : "false"}
                    />
                    {errors.mail && <p role="alert">{errors.mail?.message}</p>}

                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default Login;