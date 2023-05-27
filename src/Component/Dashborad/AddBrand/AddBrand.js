import React from 'react';
import { useForm } from 'react-hook-form';


const AddBrand = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const imageStorageKey = "1d685d0dc62621d6524a698642b092eb";
    const onSubmit = async data => {
        const image = data.brandImage[0];
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
                    const uploadedBrandImageUrl = result.data.url;
                    const product = {
                        brandImg: uploadedBrandImageUrl
                    }

                    fetch('http://localhost:5000/addBrand', {
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
            <p>This is add brand page</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type='file' {...register("brandImage", { required: true })} className='input input-bordered' />
                </div>
                <input type="submit" className='btn ' value="Add" />
            </form>
        </div>
    );
};

export default AddBrand;