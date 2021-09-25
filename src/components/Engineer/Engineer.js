import React from 'react';
import './Engineer.css'

const Engineer = (props) => {
    const { name, age, role, image, salary, country } = props.engineer;
    return (
        <div>

            <div className="col">
                <div className="card shadow bg-light">
                    <img className="card-img-top" src={image} alt="" />
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <h4>Role: {role}</h4>
                        <h5>Age: {age}</h5>
                        <p>Country: {country}</p>
                        <h5>Salary: {salary} <span>&#2547;</span></h5>
                        <button onClick={() => props.cartHandler(props.engineer)} className="btn btn-outline-success">Add to Cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Engineer;