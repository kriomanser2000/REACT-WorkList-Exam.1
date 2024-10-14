import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Projects from './Projects';
import AddProject from './AddProject';
import SearchTasks from './SearchTasks';

const Projects = ({ projects }) => 
{
    return (
        <div>
            <h2>Список проектів</h2>
            <ul>
                {projects.length > 0 ? (
                    projects.map((project, index) => (
                        <li key={index}>{project.name}</li>
                    ))
                ) : (
                    <li>Немає проектів для відображення.</li>
                )}
            </ul>
        </div>
    );
};
export default Projects;