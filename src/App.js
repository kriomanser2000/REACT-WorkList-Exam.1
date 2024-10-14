import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddTask from "./AddTask";
import HomePage from "./HomePage"; 
import TaskList from "./TaskList";

const App = () => 
{
  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomePage />} /> {/* Головна */}
              <Route path="/tasks" element={<TaskList />} /> {/* Список справ */}
              <Route path="/add-task" element={<AddTask />} /> {/* Додавання справи */}
          </Routes>
      </Router>
  );
};
export default App;