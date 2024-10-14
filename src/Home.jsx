import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
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
            <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />
        </div>
    );
};
export default Home;