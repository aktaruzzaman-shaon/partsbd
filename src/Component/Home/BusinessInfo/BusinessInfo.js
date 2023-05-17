import React from 'react';

const BusinessInfo = () => {
    return (
        <div className="hero  bg-base-200 bg-orange-700 m-5 border-rounded">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora hic possimus eos minus officiis quisquam quae voluptate exercitationem error illo!</p>
                        
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default BusinessInfo;