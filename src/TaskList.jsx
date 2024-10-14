import React from "react";

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => 
{
    return (
        <div>
            <h2>Список справ</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.taskName}</h3>
                        <p>Дата: {task.dueDate}</p>
                        <p>Опис: {task.description}</p>
                        <p>Теги: {task.tags}</p>
                        <p>Пріоритет: {task.priority}</p>
                        <button onClick={() => onDeleteTask(task.id)}>Видалити</button>
                        <button onClick={() => onEditTask({ ...task, taskName: "Оновлена назва" })}>Редагувати</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TaskList;