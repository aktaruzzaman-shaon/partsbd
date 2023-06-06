import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const imageStorageKey = "1d685d0dc62621d6524a698642b092eb";

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const uploadedImageUrl = result.data.url;
                    const product = {
                        name: data.Name,
                        price: data.Price,
                        stock: data.Stock,
                        category: data.Category,
                        img: uploadedImageUrl
                    }

                    fetch('http://localhost:5000/addParts', {
                        method: 'POST',
                        headers: {
                            'content-type': "application/json",
                            authorizaion: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log('insert', inserted)
                            reset()
                        })
                }
            })
    }


    return (
        <div>
            <div><p>Add Product</p></div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-control w-full'>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text' {...register("Name", { required: true })} className='input input-bordered' />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type='number' {...register("Price", { required: true })} className='input input-bordered' />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type='text' {...register("Category", { required: true })} className='input input-bordered' />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Stock</span>
                        </label>
                        <input type='number' {...register("Stock", { required: true })} className='input input-bordered' />
                    </div>

                    <div className="form-control">
                        <label className='label'>
                            <span className='label-text'>Description</span>
                        </label>
                        <textarea {...register("Description", { required: true })} className='input input-bordered mb-5' rows={8} cols={40} ></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type='file' {...register("image", { required: true })} className='input input-bordered' />
                    </div>
                    <input type="submit" className='btn ' value="ADD" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;
