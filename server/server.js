const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let projects = [];
let tasks = 
[
    { id: 1, taskName: "Готова справа 1", dueDate: "2024-10-15", description: "Опис першої справи", tags: "не особисте", priority: "низький" },
    { id: 2, taskName: "Готова справа 2", dueDate: "2024-10-16", description: "Опис другої справи", tags: "особисте", priority: "високий" }
];
app.get('/projects', (req, res) => 
{
    res.json(projects);
});
app.post('/projects', (req, res) => 
{
    const newProject = { id: uuidv4(), ...req.body };
    projects.push(newProject);
    res.status(201).json(newProject);
});
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
    if (index !== -1) 
    {
        tasks[index] = { ...tasks[index], ...req.body };
        res.json(tasks[index]);
    } 
    else
    {
        res.status(404).json({ error: "Задача не знайдена" });
    }
});
app.listen(PORT, () => 
{
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});