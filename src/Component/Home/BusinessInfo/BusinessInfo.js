import React from 'react';

const BusinessInfo = () => {
    return (
        <div className="hero m-5 border-rounded">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="card mr-3 lg:card-side bg-base-100 shadow-xl">
                    <div className="card-body bg-orange-100	rounded-2xl">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora hic possimus eos minus officiis quisquam quae voluptate exercitationem error illo!</p>
                        
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">PARSBD</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessInfo;