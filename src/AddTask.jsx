import React, { useState } from "react";

const AddTask = ({ taskToEdit, onAddTask, onUpdateTask }) => 
{
    const [taskName, setTaskName] = useState(taskToEdit ? taskToEdit.taskName : "");
    const [dueDate, setDueDate] = useState(taskToEdit ? taskToEdit.dueDate : "");
    const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : "");
    const [tags, setTags] = useState(taskToEdit ? taskToEdit.tags : "");
    const [priority, setPriority] = useState(taskToEdit ? taskToEdit.priority : "Low");
    const handleSubmit = (e) => 
    {
        e.preventDefault();
        const newTask = { taskName, dueDate, description, tags, priority };
        if (taskToEdit) 
        {
            onUpdateTask({ ...newTask, id: taskToEdit.id });
        } 
        else 
        {
            onAddTask(newTask);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Справа: </label>
                <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
            </div>
            <div>
                <label>Дата/Час: </label>
                <input type="datetime-local" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
            </div>
            <div>
                <label>Опис: </label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label>Теги: </label>
                <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
            </div>
            <div>
                <label>Пріоритет: </label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="Low">Низький</option>
                    <option value="Medium">Середній</option>
                    <option value="High">Високий</option>
                </select>
            </div>
            <button type="submit">{taskToEdit ? 'Оновити' : 'Додати справу'}</button>
        </form>
    );
};
export default AddTask;