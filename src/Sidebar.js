import React from 'react';
import './Sidebar.css';

const Sidebar = ({ projects, onSelectProject, onDeleteProject }) => 
{
    return (
        <div className="sidebar">
            <h2 style={{color:'white'}}>Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <span onClick={() => onSelectProject(project.id)}>{project.name}</span>
                        <button onClick={() => onDeleteProject(project.id)}>Delete</button>
                        <button onClick={() => window.location.href = `/projects/edit/${project.id}`}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Sidebar;