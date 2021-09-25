import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    let total = 0
    for (const salary of cart) {
        total = total + salary.salary;
    }

    return (
        <div className="p-4 border shadow bg-light">
            <h3>Engineers: {cart.length}</h3>
            <h5>Total Salary: {total} <span>&#2547;</span></h5>
            <ul>
                {
                    cart.map(engineer => <li>{engineer.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;