import React, { useEffect, useState } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import AddTask from './AddTask';

const ProjectDetails = ({ filteredTasks }) => 
{
    const { projectId } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTaskList, setFilteredTaskList] = useState([]);
    useEffect(() => 
    {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        const foundProject = projects.find((proj) => proj.id === parseInt(projectId));
        if (!foundProject) 
        {
            navigate('/');
            return;
        }
        setProject(foundProject);
        const storedTasks = JSON.parse(localStorage.getItem(`tasks_${projectId}`)) || [];
        setTasks(storedTasks);
    }, [projectId, navigate]);
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
    const handleSearch = (query) => 
    {
        const lowerQuery = query.toLowerCase();
        const filtered = tasks.filter((task) => 
        {
            return (
                (task.taskName && task.taskName.toLowerCase().includes(lowerQuery)) ||
                (task.description && task.description.toLowerCase().includes(lowerQuery)) ||
                (task.tags && Array.isArray(task.tags) && task.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) ||
                (task.priority && String(task.priority).toLowerCase().includes(lowerQuery))
            );
        });
        setFilteredTaskList(filtered);
    };
    const formatDate = (dateString) => 
    {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', 
        {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };
    const displayTasks = searchQuery ? filteredTaskList : tasks;
    return (
        <div>
            <h2>Project: {project ? project.name : 'Loading...'}</h2>
            <input
                style={{ marginBottom: '10px', height: '20px', width: '120px' }}
                type="text"
                placeholder="Search Task..."
                value={searchQuery}
                onChange={(e) => 
                {
                    setSearchQuery(e.target.value);
                    handleSearch(e.target.value);
                }}
            />
            <AddTask
                onTaskAdded={handleTaskAdded}
                projectId={projectId}
                editingTask={editingTask}
                onTaskEdit={handleTaskEdit}
            />
            <ul>
                {displayTasks.map(task => (
                    <li key={task.id} style={{ padding: '10px', margin: '10px 0' }}>
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