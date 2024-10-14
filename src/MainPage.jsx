import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const MainPage = () => 
{
    return (
        <div>
            <h1>Менеджер справ</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Головна</Link>
                    </li>
                    <li>
                        <Link to="/add-task">Додати нову справу</Link>
                    </li>
                    <li>
                        <Link to="/tasks">Список справ</Link>
                    </li>
                    <li>
                        <Link to="/projects">Список проектів</Link>
                    </li>
                    <li>
                        <Link to="/search">Пошук справ</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default MainPage;