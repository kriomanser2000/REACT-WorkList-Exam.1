import React from "react";
import AddTask from "./AddTask";
import Home from './Home';
import {Routes, Route} from 'react-router-dom';
const App = () =>
{
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-task" element={<AddTask />} />
      </Routes>
    </div>
  );
};
export default App;