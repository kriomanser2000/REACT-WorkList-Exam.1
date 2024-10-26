import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AddTask from './AddTask';
import Projects from './Projects';
import TaskList from './TaskList';
import './App.css';

const Home = () => 
{
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [tasks, setTasks] = useState([]);
    const handleProjectSelect = (projectId) => 
    {
        setSelectedProjectId(projectId);
    };
    const handleTaskAdded = (newTask) => 
    {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };
    return (
        <div>
            <h1>Менеджер справ</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/tasks">Список завдань</Link>
                    </li>
                    <li>
                        <Link to="/add-task">Додати завдання</Link>
                    </li>
                    <li>
                        <Link to="/projects">Проекти</Link>
                    </li>
                </ul>
            </nav>
            <Projects onProjectSelect={handleProjectSelect} />
            {selectedProjectId && <TaskList projectId={selectedProjectId} tasks={tasks} />}
            <AddTask onTaskAdded={handleTaskAdded} />
        </div>
    );
};
export default Home;