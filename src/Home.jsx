import React, {useState, useEffect} from "react";
import AddTask from "./AddTask";
const Home = () =>
{
  const [tasks, setTasks] = useState([]);
  useEffect(() =>
    {
        ("http://localhost:5000/tasks")
        .then(response => response.json())
        .then(data => setTasks(data));
    }, []);
    const handleAddTask = (newTask) =>
        {
            setTasks([...tasks, newTask]);
        };
        const handleDeleteTask = (id) =>
            {
                fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
                .then(() =>
                    {
                        setTasks(tasks.filter(task => task.id !== id));
                    });
            };
            const handleEditTask = (updatedTask) =>
                {
                    fetch(`http://localhost:5000/tasks/${updatedTask.id}`, 
                        {
                            method: 'PUT',
                            headers: 
                            {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(updatedTask),
                        })
                        .then(() => 
                            {
                                setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
                            });
                        };
                        return(
                        <div>
                            <h1>Менеджер справ</h1>
                            <AddTask onAddTask={handleAddTask} />
                            <h2>Список справ</h2>
                            <ul>
                                {tasks.map(task =>(
                                    <li key={task.id}>
                                        <h3>{task.taskName}</h3>
                                        <p>Дата: {task.dueDate}</p>
                                        <p>Опис: {task.description}</p>
                                        <p>Теги: {task.tags}</p>
                                        <p>Пріоритет: {task.priority}</p><button onClick={() => handleDeleteTask(task.id)}>Видалити</button>
                                        <button onClick={() => handleEditTask({...task, taskName: "Оновлена назва"})}>Редагувати</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        );
                    };
export default Home;