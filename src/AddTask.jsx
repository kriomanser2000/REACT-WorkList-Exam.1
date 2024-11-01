import React, { useState } from 'react';
import './App.css';

const AddTask = ({ onTaskAdded, projectId }) => 
{
    const [taskDetails, setTaskDetails] = useState({
        taskName: '',
        dueDate: '',
        description: '',
        tags: '',
        priority: '',
    });
    const handleInputChange = (e) => 
    {
        const { name, value } = e.target;
        setTaskDetails((prev) => ({ ...prev, [name]: value }));
    };
    const handleAddTask = () => 
    {
        if (taskDetails.taskName) 
        {
            const newTask = 
            {
                id: new Date().toISOString(),
                ...taskDetails,
                tags: taskDetails.tags.split(',').map(tag => tag.trim()),
            };
            onTaskAdded(newTask);
            setTaskDetails({
                taskName: '',
                dueDate: '',
                description: '',
                tags: '',
                priority: '',
            });
        }
    };
    return (
        <div>
            <input
                type="text"
                name="taskName"
                value={taskDetails.taskName}
                onChange={handleInputChange}
                placeholder="Назва завдання"
            />
            <input
                type="datetime-local"
                name="dueDate"
                value={taskDetails.dueDate}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="description"
                value={taskDetails.description}
                onChange={handleInputChange}
                placeholder="Опис завдання"
            />
            <input
                type="text"
                name="tags"
                value={taskDetails.tags}
                onChange={handleInputChange}
                placeholder="Теги (через кому)"
            />
            <input
                type="text"
                name="priority"
                value={taskDetails.priority}
                onChange={handleInputChange}
                placeholder="Пріоритет"
            />
            <button onClick={handleAddTask}>Додати завдання</button>
        </div>
    );
};
export default AddTask;