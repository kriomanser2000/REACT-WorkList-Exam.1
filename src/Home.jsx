import React from "react";
import {Link} from "react-router-dom";
const Home = () => 
{
    return(
        <div>
            <h1>Головна</h1>
            <p>велком</p>
            <Link to="/add-task">
            <button>Додати справу</button>
            </Link>
        </div>
    );
};
export default Home;