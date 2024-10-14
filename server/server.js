const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let tasks = 
[
    { id: 1, taskName: "Готова справа 1", dueDate: "2024-10-15", description: "Опис першої справи", tags: "не особисте", priority: "низький" },
    { id: 2, taskName: "Готова справа 2", dueDate: "2024-10-16", description: "Опис другої справи", tags: "особисте", priority: "високий" }
];
app.get('/tasks', (req, res) => 
{
    res.json(tasks);
});
app.post('/tasks', (req, res) => 
{
    console.log('Отримані дані:', req.body);
    const newTask = { id: tasks.length + 1, ...req.body };
    tasks.push(newTask);
    res.status(201).json(newTask);
});
app.delete('/tasks/:id', (req, res) => 
{
    tasks = tasks.filter(task => task.id !== parseInt(req.params.id));
    res.status(204).end();
});
app.put('/tasks/:id', (req, res) => 
{
    const index = tasks.findIndex(task => task.id === parseInt(req.params.id));
    tasks[index] = { ...tasks[index], ...req.body };
    res.json(tasks[index]);
});
app.listen(PORT, () => 
{
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});
const handleAddTask = (newTask) => 
{
    fetch('http://localhost:5000/tasks', 
    {
        method: 'POST',
        headers:
        {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
    })
    .then(response => response.json())
    .then(data => 
    {
        setTasks([...tasks, data]);
    })
    .catch(error => console.error('Помилка при додаванні справи:', error));
};