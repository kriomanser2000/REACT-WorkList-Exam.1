import React, { useState } from 'react';
import './App.css';

const AddTaskList = ({ projectId, onTaskListAdded }) => 
{
    const [listName, setListName] = useState('');
    const handleSubmit = async (e) => 
    {
        e.preventDefault();
        const newTaskList = { name: listName, projectId };
        try 
        {
            const response = await fetch(`http://localhost:5000/taskLists`, 
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTaskList),
            });
            const data = await response.json();
            onTaskListAdded(data);
            setListName('');
        } 
        catch (error) 
        {
            console.error('Помилка при додаванні списку:', error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="listName">Назва списку:</label>
                <input
                    type="text"
                    id="listName"
                    value={listName}
                    onChange={(e) => setListName(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Додати список</button>
        </form>
    );
};
export default AddTaskList;