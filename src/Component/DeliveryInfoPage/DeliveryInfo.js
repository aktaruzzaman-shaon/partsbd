import React from 'react';

const DeliveryInfo = () => {
    return (
        <div>
            <p className='font-extrabold'>Delivery Information</p>
            <div className='justify-items-center'>
                <form>
                    <div className='flex flex-col'>
                        <input type="text" placeholder="Name" className="input mb-2 input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Address" className="input mb-2 input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" className="input mb-2 input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn w-24" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeliveryInfo;