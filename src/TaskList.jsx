import React, { useEffect, useState } from 'react';

const TaskList = ({ projectId }) => 
{
    const [tasks, setTasks] = useState([]);
    useEffect(() => 
    {
        fetch(`http://localhost:5000/tasks`)
            .then((response) => response.json())
            .then((data) => setTasks(data))
            .catch((error) => console.error('Error fetching tasks:', error));
    }, []);
    return (
        <div>
            <h2>Список завдань для проекту {projectId}</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <h3>{task.taskName}</h3>
                        <p>Опис: {task.description}</p>
                        <p>Термін: {task.dueDate}</p>
                        <p>Теги: {task.tags}</p>
                        <p>Пріоритет: {task.priority}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TaskList;