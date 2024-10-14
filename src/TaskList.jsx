import React, {useState, useEffect} from "react";
const TaskList = () =>
{
    const [tasks, setTasks] = useState([]);
    useEffect(() => 
    {
        fetch('http://localhost:5000/tasks')
        .then(response => response.json())
        .then(data => setTasks(data));
    }, []);
    return(
        <div>
            <h2>Список справ</h2>
            <ul>
            {tasks.map(task =>(
                <li key={task.id}>
                    <h3>{task.taskName}</h3>
                    <p>Дата: {task.dueDate}</p>
                    <p>Опис: {task.description}</p>
                    <p>Теги: {task.tags}</p>
                    <p>Пріоритет: {task.priority}</p>                        
               </li> 
            ))}
            </ul>
        </div>
    );
};
export default TaskList;