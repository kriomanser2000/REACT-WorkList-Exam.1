import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Projects from './Projects';
import AddProject from './AddProject';
import SearchTasks from './SearchTasks';

const App = () => 
{
    const [taskToEdit, setTaskToEdit] = useState(null);
    const handleEditTask = (task) => 
    {
            setTaskToEdit(task);
    };
    const handleAddProject = (project) => 
    {
        
    };
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tasks" element={<TaskList onEditTask={handleEditTask} />} />
                <Route path="/add-task" element={<AddTask />} />
                <Route path="/add-project" element={<AddProject onAddProject={handleAddProject} />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/search" element={<SearchTasks />} />
            </Routes>
        </Router>
    );
}; 
export default App;