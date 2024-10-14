import React, { useState, useEffect } from "react";

const TaskList = ({ projectId }) => 
{
    const [tasks, setTasks] = useState([]);
    useEffect(() => 
    {
        if (projectId) 
        {
            fetch(`http://localhost:5000/projects/${projectId}/tasks`)
                .then(response => response.json())
                .then(data => setTasks(data))
                .catch(error => console.error('Помилка при отриманні задач:', error));
        }
    }, [projectId]);
    const handleDeleteTask = (id) => 
    {
        fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
            .then(() => setTasks(tasks.filter(task => task.id !== id)));
    };
    return (
        <div>
            <h2>Список справ</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.taskName}</h3>
                        <p>Дата: {task.dueDate}</p>
                        <p>Опис: {task.description}</p>
                        <p>Теги: {task.tags}</p>
                        <p>Пріоритет: {task.priority}</p>
                        <button onClick={() => handleDeleteTask(task.id)}>Видалити</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TaskList;