import React from "react";
import {NavLink} from "react-router-dom";

const Links = () => {
    return (
        <div>
            <div className="container">
            <nav>
            <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Products App</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <NavLink exact activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/add_products">Add Products</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/show_products">Show Products</NavLink>
                    </li>

                </ul>
                </div>
                </nav>
            </div>

        </div>
    );
};

export default Links;
