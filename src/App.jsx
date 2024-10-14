import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Projects from './Projects';
import SearchTasks from './SearchTasks';

const App = () => 
{
    const [taskToEdit, setTaskToEdit] = useState(null);
    const handleEditTask = (task) => 
    {
        setTaskToEdit(task);
    };
    const handleUpdateTask = (updatedTask) => 
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
            setTaskToEdit(null);
        });
    };
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/add-task" element={<AddTask taskToEdit={taskToEdit} onAddTask={handleAddTask} onUpdateTask={handleUpdateTask} />} />
                <Route path="/task-list" element={<TaskList onEditTask={handleEditTask} />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/search" element={<SearchTasks />} />
            </Routes>
        </Router>
    );
};
export default App;