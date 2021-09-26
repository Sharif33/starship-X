import React from 'react';
import './Engineer.css'

const Engineer = (props) => {
    const { name, age, role, image, salary, country, contact } = props.engineer;
    return (
        <div>

            <div className="col">
                <div className="card shadow bg-light rounded-3">
                    <img className="card-img-top" src={image} alt="" />
                    <div className="card-body">
                        <h3 className="card-title fw-bold text-center">{name}</h3>
                        <h4 className="text-center"><small className="text-secondary">as</small> <span className="fw-bold text-purple">{role}</span></h4>
                        <h5 className="text-secondary">Age: <span className="fw-bold text-dark">{age}</span></h5>
                        <h5 className="text-secondary">Country: <span className="fw-bold text-dark">{country}</span></h5>
                        <h5 className="text-secondary">Salary: <span className="fw-bold text-danger">${salary}</span> <small>/Annual</small></h5>
                        <p>Contact: <span className="text-primary">{contact}</span></p>
                        <div className="text-center">
                            <button onClick={() => props.cartHandler(props.engineer)} className="btn btn-purple"><i className="fas fa-plus-square"></i> Add to Hire</button>
                        </div>
                        <div>
                            <h3 className="text-primary text-center">
                                <i className="fab fa-facebook-square mx-2 mt-2"></i>
                                <i className="fab fa-linkedin mx-2 mt-2"></i>
                                <i className="fab fa-github-square mx-2 mt-2"></i>
                                <i className="fab fa-twitter-square mx-2 mt-2"></i>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Engineer;