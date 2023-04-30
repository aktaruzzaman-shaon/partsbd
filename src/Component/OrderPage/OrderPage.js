import React from 'react';

const OrderPage = () => {


    return (
        <div>
            <input type="checkbox" id="edit" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="edit" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form>
                      <input type="text" value="shaon"/>
                    </form>
                    <h2>h2 element</h2>
                </div>
            </div>
        </div>

    );
};

export default OrderPage;