import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = ({ onTaskAdded }) => 
{
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [tags, setTags] = useState('');
    const [priority, setPriority] = useState('Low');
    const handleSubmit = (e) => 
    {
        e.preventDefault();
        const newTask = { taskName, description, dueDate, tags, priority };
        fetch('http://localhost:5000/tasks', 
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        })
        .then((response) => response.json())
        .then((data) => 
        {
            console.log('Task added:', data);
            onTaskAdded(data);
        })
        .catch((error) => console.error('Error adding task:', error));
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Назва справи" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
            <input type="text" placeholder="Опис" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="datetime-local" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
            <input type="text" placeholder="Теги" value={tags} onChange={(e) => setTags(e.target.value)} />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="Low">Низький</option>
                <option value="Medium">Середній</option>
                <option value="High">Високий</option>
            </select>
            <button type="submit">Додати справу</button>
        </form>
    );
};
export default AddTask;