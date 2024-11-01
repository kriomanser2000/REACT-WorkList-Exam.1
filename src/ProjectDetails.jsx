import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddTask from './AddTask';

const ProjectDetails = () => 
{
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [tasks, setTasks] = useState([]);
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
    const handleTaskDelete = (taskId) => 
    {
        setTasks(tasks.filter(task => task.id !== taskId));
    };
    const handleTaskEdit = (updatedTask) => 
    {
        setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    };
    if (!project) return <div>Loading project...</div>;
    return (
        <div>
            <h2>Проект: {project.name}</h2>
            <AddTask onTaskAdded={handleTaskAdded} projectId={projectId} />
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.taskName} - {task.dueDate} - {task.description}
                        <span>{Array.isArray(task.tags) ? task.tags.join(', ') : ''}</span>
                        - {task.priority}
                        <button onClick={() => handleTaskDelete(task.id)}>Видалити</button>
                        <button onClick={() => handleTaskEdit({ ...task, taskName: 'Нове ім’я' })}>Редагувати</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ProjectDetails;