import React, { useState } from 'react';

const SearchTasks = () => 
{
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const handleSearch = () => 
    {
        fetch(`http://localhost:5000/tasks?search=${searchTerm}`)
            .then(response => response.json())
            .then(data => setResults(data));
    };
    return (
        <div>
            <h2>Пошук справ</h2>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                placeholder="Пошук за назвою або тегами"
            />
            <button onClick={handleSearch}>Шукати</button>
            <ul>
                {results.map(task => (
                    <li key={task.id}>
                        <h3>{task.taskName}</h3>
                        <p>{task.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default SearchTasks;