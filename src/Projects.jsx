import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Projects = ({ projects, onDeleteProject }) => 
{
    return (
        <div>
            <h2>Project List</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        {project.name}
                        <Link to={`/projects/edit/${project.id}`}>
                            <button>Edit</button>
                        </Link>
                        <Link to={`/projects/${project.id}`}>
                            <button>Details</button>
                        </Link>
                        <button onClick={() => onDeleteProject(project.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Projects;