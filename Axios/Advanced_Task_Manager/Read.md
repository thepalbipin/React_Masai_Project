<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Template</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://www.unpkg.com/react@18.2.0/umd/react.development.js"></script>
  <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script type="text/babel">

    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    const TaskManager = () => {
      const [tasks, setTasks] = useState([]);

      useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/tasks');
          setTasks(response.data);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      };

      const handleAddTask = async (newTask) => {
        try {
          const response = await axios.post('http://localhost:3000/tasks', newTask);
          setTasks([...tasks, response.data]);
        } catch (error) {
          console.error('Error adding task:', error);
        }
      };

      const handleDeleteTask = async (taskId) => {
        try {
          await axios.delete(`http://localhost:3000/tasks/${taskId}`);
          setTasks(tasks.filter(task => task.id !== taskId));
        } catch (error) {
          console.error('Error deleting task:', error);
        }
      };

      return (
        <div>
          <TaskForm handleAddTask={handleAddTask} />
          <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
        </div>
      );
    };

    const TaskForm = ({ handleAddTask }) => {
      const [title, setTitle] = useState('');
      const [assignee, setAssignee] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await handleAddTask({ title, assignee });
          setTitle('');
          setAssignee('');
        } catch (error) {
          console.error('Error adding task:', error);
        }
      };

      return (
        <form onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" value={assignee} onChange={(e) => setAssignee(e.target.value)} />
          <button type="submit">Add Task</button>
        </form>
      );
    };

    const TaskList = ({ tasks, handleDeleteTask }) => {
      return (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.title} - {task.assignee}
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      );
    };

    ReactDOM.render(<TaskManager />, document.getElementById('root'));

  </script>
</html>
