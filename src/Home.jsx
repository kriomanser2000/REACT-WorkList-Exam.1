import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import './App.css';

const Home = () => 
{
    const [tasks, setTasks] = useState([]);
    useEffect(() => 
    {
        fetch('http://localhost:5000/tasks')
            .then(response => 
            {
                if (!response.ok) 
                {
                    throw new Error('Помилка сервера');
                }
                return response.json();
            })
            .then(data => setTasks(data))
            .catch(error => console.error('Помилка отримання даних:', error));
    }, []);
    const handleAddTask = (newTask) => 
    {
        console.log('Додати задачу:', newTask);
        fetch('http://localhost:5000/tasks', 
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        })
        .then(response => response.json())
        .then(data => 
        {
            console.log('Дані після додавання:', data);
            setTasks(prevTasks => [...prevTasks, data]);
        })
        .catch(error => console.error('Помилка при додаванні справи:', error));
    };
    const handleDeleteTask = (id) => 
    {
        fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
            .then(() => 
            {
                setTasks(tasks.filter(task => task.id !== id));
            });
    };
    const handleEditTask = (updatedTask) => 
    {
        fetch(`http://localhost:5000/tasks/${updatedTask.id}`, 
        {
            method: 'PUT',
            headers: 
            {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTask),
        })
        .then(() => 
        {
            setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
        });
    };
    return (
        <div>
            <h1>Менеджер справ</h1>
            <AddTask onAddTask={handleAddTask} />
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
                        <button onClick={() => handleEditTask({ ...task, taskName: "Оновлена назва" })}>Редагувати</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Home;