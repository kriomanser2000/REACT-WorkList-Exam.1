import React, { useState, useEffect } from 'react';
import './App.css';

const AddTask = ({ onTaskAdded, projectId, editingTask, onTaskEdit }) => 
{
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);
    const [priority, setPriority] = useState('');
    const [isEditingDescription, setIsEditingDescription] = useState(false);
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
    const handleDescriptionSave = () => 
    {
        setIsEditingDescription(false);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input className="createTaskName" type="text" placeholder="Task Name" value={taskName} onChange={(e) => setTaskName(e.target.value)}required disabled={isEditingDescription} />
            <input className="dateTask" type="datetime-local" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required disabled={isEditingDescription} />
            <div style={{ position: 'relative' }}>
                {!isEditingDescription ? (
                    <button type="button" onClick={() => setIsEditingDescription(true)}
                        style={{
                            width: '120px',
                        }}>{description || 'Add Description'}</button>
                ) : (
                    <textarea placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} required
                        style={{
                            width: '100%',
                            height: '60px',
                            resize: 'none',
                            transition: 'height 0.2s ease',
                        }}/>)}
                {isEditingDescription && (
                    <button type="button" onClick={handleDescriptionSave}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            padding: '5px 10px',
                        }}>Save</button>
                )}
            </div>
            <input class="typeTagTask" type="text" placeholder="Tags (separated by commas)" value={tags.join(', ')} onChange={(e) => setTags(e.target.value.split(','))} disabled={isEditingDescription} />
            <select class="setPriorTask" id="priority" value={priority} onChange={(e) => setPriority(e.target.value)} required disabled={isEditingDescription} >
                <option value="" disabled>Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button type="submit" disabled={isEditingDescription}>{editingTask ? 'Update task' : 'Add task'}</button>
        </form>
    );
};
export default AddTask;