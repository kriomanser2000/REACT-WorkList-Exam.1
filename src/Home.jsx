import React, { useState } from 'react';
import AddTask from './AddTask';
import Projects from './Projects';
import TaskList from './TaskList';
import './App.css';

const Home = () => 
    {
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const handleProjectSelect = (projectId) => 
    {
        setSelectedProjectId(projectId);
    };
    return (
        <div>
            <h1>Менеджер справ</h1>
            <Projects onProjectSelect={handleProjectSelect} />
            {selectedProjectId && <TaskList projectId={selectedProjectId} />}
        </div>
    );
};
export default Home;