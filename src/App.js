import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import Projects from "./Projects";
import AddProject from "./AddProject";

const App = () => 
{
    const [refreshProjects, setRefreshProjects] = useState(false);
    const handleProjectSelect = (projectId) => 
    {
        console.log("Вибраний проект ID: ", projectId);  
    };
    const handleProjectAdded = () => 
    {
        setRefreshProjects(!refreshProjects);
    };
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route 
                path="/projects" 
                element={
                    <Projects 
                        onProjectSelect={handleProjectSelect} 
                        refreshProjects={refreshProjects} 
                    />
                } 
            />
            <Route path="/add-project" element={<AddProject onProjectAdded={handleProjectAdded} />} />
        </Routes>
    );
};
export default App;