import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import Projects from "./Projects";

const App = () => 
{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<TaskList />} />
                <Route path="/add-task" element={<AddTask />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    );
};
export default App;