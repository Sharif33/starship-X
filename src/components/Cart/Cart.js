import React from 'react';
import './Cart.css'

const Cart = (props) => {

    // destructuring
    const { cart } = props;

    // total salary
    let total = 0
    for (const salary of cart) {
        total = total + salary.salary;
    }

    return (
        <div className="p-4 rounded-3 text-center shadow bg-light">
            <h3>Engineers: {cart.length}</h3>
            <h5>Total Salary: $ <span className="text-danger fw-bold">{total}</span></h5>
            <div className="my-2">
                {
                    cart.map(engineer => <div className="d-flex my-2 rounded-3 bg-blue"><img className="w-50" src={engineer.image} alt="" />
                        <p className="text-white m-auto ">{engineer.name} </p></div>
                    )
                }
            </div>
        </div>
    );
};

export default Cart;