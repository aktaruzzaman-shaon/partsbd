import React from 'react';

const Brand = ({ brandImageUrl }) => {
    const { brandImg } = brandImageUrl;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl rounded mx-3 justify-center border-2">
            <figure><img className='h-36 w-full object-contain' src={brandImg} alt="brandimage" /></figure>
        </div>
    );
};

export default Brand;