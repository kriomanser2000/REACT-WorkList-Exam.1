import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProject = () => 
{
    const { projectId } = useParams();
    const [projectName, setProjectName] = useState('');
    const navigate = useNavigate();
    useEffect(() => 
    {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        const foundProject = projects.find((proj) => proj.id === parseInt(projectId));
        if (foundProject) 
        {
            setProjectName(foundProject.name);
        }
    }, [projectId]);
    const handleUpdateProject = () => 
    {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        const updatedProjects = projects.map(project => 
            project.id === parseInt(projectId) ? { ...project, name: projectName } : project
        );
        localStorage.setItem('projects', JSON.stringify(updatedProjects));
        navigate('/');
    };
    return (
        <div>
            <h2 style={{color:'white'}}>Edit Project</h2>
            <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder="Project name" />
            <button onClick={handleUpdateProject}>Update Project</button>
        </div>
    );
};
export default EditProject;