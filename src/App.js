import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import Projects from "./Projects";
import AddProject from "./AddProject";

const App = () => 
{
    const [projects, setProjects] = useState([]);
    const handleAddProject = (newProject) => 
    {
        setProjects((prevProjects) => [...prevProjects, newProject]);
    };
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/projects" element={<Projects />} />
            <Route
                path="/add-project"
                element={<AddProject onAddProject={handleAddProject} />}
            />
        </Routes>
    );
};
export default App;