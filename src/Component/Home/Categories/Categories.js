import React from 'react';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';


const Categories = () => {

    const handleSearcByCategory = e => {
        console.log(e.target.value);
    }
    return (
        <div className='flex flex-row  '>

            <div className="navbar bg-base-100 basis-2/4 bg-emerald-300 justify-center	">
                <div className="flex-none">
                    <ul className="menu menu-vertical p-5">
                        <li onClick={handleSearcByCategory} value="shaon"><a>Car Parts</a></li>
                        <li><a>Tools And hardware</a></li>
                        <li><a>Hybrid car battey</a></li>
                        <li><a>Heavy veiche</a></li>
                    </ul>
                </div>
            </div>

            {/* banner */}

            <Banner></Banner>

        </div>


    );
};

export default Categories;