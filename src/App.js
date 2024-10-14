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
              <Route path="/" element={<HomePage />} />
              <Route path="/tasks" element={<TaskList />} />
              <Route path="/add-task" element={<AddTask />} />
          </Routes>
      </Router>
  );
};
export default App;