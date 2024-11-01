// import React, { useEffect, useState } from 'react';
// import './App.css';
// import AddTaskList from './AddTaskList';
// import AddTask from './AddTask';

// const TaskListComponent = ({ projectId }) => 
// {
//     const [taskLists, setTaskLists] = useState([]);
//     useEffect(() => 
//     {
//         const fetchTaskLists = async () => 
//         {
//             try 
//             {
//                 const response = await fetch(`http://localhost:5000/taskLists?projectId=${projectId}`);
//                 const data = await response.json();
//                 setTaskLists(data);
//             } 
//             catch (error) 
//             {
//                 console.error('Error fetching task lists:', error);
//             }
//         };
//         fetchTaskLists();
//     }, [projectId]);
//     const handleTaskListAdded = (newTaskList) => 
//     {
//         setTaskLists((prevLists) => [...prevLists, newTaskList]);
//     };
//     return (
//         <div>
//             <h2>Списки завдань для проекту {projectId}</h2>
//             <AddTaskList projectId={projectId} onTaskListAdded={handleTaskListAdded} />
//             <ul>
//                 {taskLists.map((list) => (
//                     <li key={list.id}>
//                         {list.name}
//                         <AddTask taskListId={list.id} />
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
// export default TaskListComponent;