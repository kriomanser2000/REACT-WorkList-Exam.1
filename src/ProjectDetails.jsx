import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddTask from './AddTask';

const ProjectDetails = () => 
{
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    useEffect(() => 
    {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        const foundProject = projects.find((proj) => proj.id === parseInt(projectId));
        setProject(foundProject);
        const storedTasks = JSON.parse(localStorage.getItem(`tasks_${projectId}`)) || [];
        setTasks(storedTasks);
    }, [projectId]);
    useEffect(() => 
    {
        if (projectId) 
        {
            localStorage.setItem(`tasks_${projectId}`, JSON.stringify(tasks));
        }
    }, [tasks, projectId]);
    const handleTaskAdded = (newTask) => 
    {
        setTasks([...tasks, newTask]);
    };
    const handleTaskEdit = (updatedTask) => 
    {
        setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
        setEditingTask(null);
    };
    const handleTaskDelete = (taskId) => 
    {
        setTasks(tasks.filter(task => task.id !== taskId));
    };
    const startEditingTask = (task) => 
    {
        setEditingTask(task);
    };
    const sortedTasks = [...tasks].sort((a, b) => 
    {
        const priorityOrder = { "High": 1, "Medium": 2, "Low": 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    const formatDate = (dateString) => 
    {
        const date = new Date(dateString);
        return date.toLocaleString('uk-UA', 
        {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    if (!project) return <div>Loading project...</div>;
    return (
        <div>
            <h2>Project: {project.name}</h2>
            <AddTask 
                onTaskAdded={handleTaskAdded} 
                projectId={projectId} 
                editingTask={editingTask} 
                onTaskEdit={handleTaskEdit} 
            />
            <ul>
                {sortedTasks.map(task => (
                    <li key={task.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                        <p><strong>Name:</strong> {task.taskName}</p>
                        <p><strong>Deadline:</strong> {formatDate(task.dueDate)}</p>
                        <p><strong>Description:</strong> {task.description}</p>
                        <p><strong>Tags:</strong> {Array.isArray(task.tags) ? task.tags.join(', ') : ''}</p>
                        <p><strong>Priority:</strong> {task.priority}</p>
                        <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
                        <button onClick={() => startEditingTask(task)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ProjectDetails;