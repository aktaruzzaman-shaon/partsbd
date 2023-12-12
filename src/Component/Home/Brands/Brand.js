import React from 'react';

const Brand = ({ brandImageUrl }) => {
    const { brandImg } = brandImageUrl;
    return (
        <div className="card lg:card-side   rounded mx-3 justify-center border-none">
            <figure><img className=' object-cover h-48 w-60' src={brandImg} alt="brandimage" /></figure>
        </div>
    );
};

export default Brand;