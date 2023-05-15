import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';

const DeliveryInfo = () => {

    const [user] = useAuthState(auth);
    const userEmail = user?.email;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {

        const userDeliveryInfo = { name: data?.Name, phone: data?.PhoneNumber, Address: data?.Address };
        fetch(`http://localhost:5000/addDeliveryInfo/${userEmail}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userDeliveryInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                reset()
            })
    };



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-control w-full'>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("Name", { required: true })} className='input input-bordered' />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">PhoneNumber</span>
                    </label>
                    <input type='text' {...register("PhoneNumber", { required: true })} className='input input-bordered' />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input type='text' {...register("Address", { required: true })} className='input input-bordered' />
                </div>
                <input type="submit" className='btn' value="Submit" />
            </form>
        </div>
    );
};

export default DeliveryInfo;