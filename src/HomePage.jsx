import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => 
{
    return (
        <div>
            <h1>Ласкаво просимо до Менеджера Справ</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/tasks">Перейти до списку справ</Link>
                    </li>
                    <li>
                        <Link to="/add-task">Додати нову справу</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default HomePage;