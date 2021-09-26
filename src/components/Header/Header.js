import React from 'react';

const Header = () => {
    return (
        <div>
            <nav>
                <div className="py-2 bg-primary text-light text-center">
                    <h2>Project <span className="text-warning fw-bold">STARSHIP-x</span> Team</h2>
                    <p>Developing a vehicle that could be a game-changer for space travel. Starship-X will be a fully reusable transport system capable of carrying up to 100 people to the Red Planet</p>
                    <h3>Total Budget: <span className="text-warning fw-bold fs-2">50 Million</span></h3>
                </div>
            </nav>

        </div>
    );
};

export default Header;