import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Projects from './Projects';
import SearchTasks from './SearchTasks';

const App = () => 
{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/add-task" element={<AddTask />} />
                <Route path="/task-list" element={<TaskList />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/search" element={<SearchTasks />} />
            </Routes>
        </Router>
    );
};
export default App;