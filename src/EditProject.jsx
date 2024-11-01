import React, { useEffect, useState } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditProject = () => 
{
    const { projectId } = useParams();
    const [project, setProject] = useState({ name: '' });
    const navigate = useNavigate();
    useEffect(() => 
    {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        const foundProject = projects.find(proj => proj.id === parseInt(projectId));
        if (foundProject) 
        {
            setProject(foundProject);
        } 
        else
        {
            console.error('Project not found');
        }
    }, [projectId]);
    const handleInputChange = (e) => 
    {
        const { name, value } = e.target;
        setProject(prevProject => ({ ...prevProject, [name]: value }));
    };
    const handleSubmit = (e) => 
    {
        e.preventDefault();
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        const updatedProjects = projects.map(proj =>
            proj.id === parseInt(projectId) ? project : proj
        );
        localStorage.setItem('projects', JSON.stringify(updatedProjects));
        alert('Проект оновлено!');
        navigate('/');
    };
    return (
        <div>
            <h2>Редагувати проект</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    value={project.name} 
                    onChange={handleInputChange} 
                    required 
                />
                <button type="submit">Зберегти</button>
            </form>
        </div>
    );
};
export default EditProject;