import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Engineer from '../Engineer/Engineer';
import './Engineers.css'

const Engineers = () => {

    // useState use for fetch data
    const [engineers, setEngineers] = useState([]);
    // useState for Cart
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./engineers.json')
            .then(res => res.json())
            .then(data => setEngineers(data))
    }, [])
    // Add button cart handler
    const cartHandler = (engineer) => {
        const newCart = [...cart, engineer]
        setCart(newCart);
    }

    return (
        <div className="p-4">
            <div className="col-md-12 d-flex justify-content-center">
                <div className="col-md-9">
                    <div className="row row-cols-2 row-cols-md-3 g-4">
                        {
                            engineers.map(engineer => <Engineer
                                key={engineer.id}
                                engineer={engineer}
                                cartHandler={cartHandler}
                            >
                            </Engineer>)
                        }
                    </div>
                </div>
                <div className="col-md-3 p-4">
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Engineers;