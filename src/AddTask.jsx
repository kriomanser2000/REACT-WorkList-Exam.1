import React, { useState } from 'react';

const AddTask = ({ onTaskAdded, projectId }) => 
{
    const [taskName, setTaskName] = useState('');
    const handleAddTask = () => 
    {
        if (taskName) 
        {
            const newTask = 
            {
                id: new Date().toISOString(),
                taskName: taskName,
            };
            onTaskAdded(newTask);
            setTaskName('');
        }
    };
    return (
        <div>
            <input 
                type="text" 
                value={taskName} 
                onChange={(e) => setTaskName(e.target.value)} 
                placeholder="Назва завдання" 
            />
            <button onClick={handleAddTask}>Додати завдання</button>
        </div>
    );
};
export default AddTask;