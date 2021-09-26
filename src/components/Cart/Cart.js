import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let total = 0
    for (const salary of cart) {
        total = total + salary.salary;
    }

    return (
        <div className="p-4 border rounded-3 text-center shadow bg-light">
            <h3>Engineers: {cart.length}</h3>
            <h5>Total Salary: $ <span className="text-danger fw-bold">{total}</span></h5>
            <div className="my-2">
                {
                    cart.map(engineer => <div className="d-flex p-2 border my-2 rounded-3 bg-blue-50"><img className="w-25 rounded" src={engineer.image} alt="" />
                        <p className="text-white m-auto ">{engineer.name} </p></div>
                    )
                }
            </div>


        </div>
    );
};

export default Cart;