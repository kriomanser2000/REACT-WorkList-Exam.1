import React, { useState } from "react";

const AddTask = ({ onAddTask }) => 
{
    const [taskName, setTaskName] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [priority, setPriority] = useState("Low");
    const handleSubmit = (e) => 
    {
        e.preventDefault();
        const newTask = { taskName, dueDate, description, tags, priority };
        console.log('Нова задача:', newTask);
        onAddTask(newTask);
        setTaskName("");
        setDueDate("");
        setDescription("");
        setTags("");
        setPriority("Low");
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
            <button type="submit">Додати справу</button>
        </form>
    );
};
export default AddTask;