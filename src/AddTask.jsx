import React, { useState, useEffect } from 'react';

const AddTask = ({ onTaskAdded, projectId, editingTask, onTaskEdit }) => 
{
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);
    const [priority, setPriority] = useState('');
    useEffect(() =>
    {
        if (editingTask) 
        {
            setTaskName(editingTask.taskName);
            setDueDate(editingTask.dueDate);
            setDescription(editingTask.description);
            setTags(editingTask.tags || []);
            setPriority(editingTask.priority);
        } 
        else 
        {
            setTaskName('');
            setDueDate('');
            setDescription('');
            setTags([]);
            setPriority('');
        }
    }, [editingTask]);
    const handleSubmit = (e) => 
    {
        e.preventDefault();
        const newTask = 
        {
            id: editingTask ? editingTask.id : Date.now(),
            taskName,
            dueDate,
            description,
            tags,
            priority,
        };
        if (editingTask) 
        {
            onTaskEdit(newTask);
        } 
        else 
        {
            onTaskAdded(newTask);
        }
        setTaskName('');
        setDueDate('');
        setDescription('');
        setTags([]);
        setPriority('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Назва задачі" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
            <input type="datetime-local" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
            <textarea placeholder="Опис задачі" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="text" placeholder="Теги (через кому)" value={tags.join(', ')} onChange={(e) => setTags(e.target.value.split(','))} />
            <label htmlFor="priority">Пріоритет:</label>
            <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)} required>
                <option value="" disabled>Оберіть пріоритет</option>
                <option value="High">Високий</option>
                <option value="Medium">Середній</option>
                <option value="Low">Низький</option>
            </select>
            <button type="submit">{editingTask ? 'Оновити задачу' : 'Додати задачу'}</button>
        </form>
    );
};
export default AddTask;