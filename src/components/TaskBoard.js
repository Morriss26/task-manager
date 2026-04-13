// src/components/TaskCard.js- 'use client' is used to make app interactive
//COMPONENT: TaskBoard ('brain of the app)
// PURPOSE" Manages logic and proccessing of the app by passing down data to child components and then recieving it up from children via callback functions and commands
//TYPE: Client Component

'use client';

import { useState, useEffect } from 'react';
import TaskStats   from './TaskStats';
import AddTaskForm from './AddTaskForm';
import TaskList    from './TaskList';

export default function TaskBoard() {
  //==SETTING UP STATE VARIABLES======================
  //The function is passed into the useState hook and is called a lazy initializer. 
  //It only runs once when the component is first rendered, which is more efficient than running the function on every render.
  //The function retrieves the tasks from localStorage, parses them from JSON, and returns them as the initial state for the tasks variable. If there are no tasks in localStorage, it returns an empty array.
  const [filter, setFilter] = useState('all');
//The filter is separate from the tasks and is only used to determine which tasks appear on the screen.
//Since the tasks are updated at different times the each get a seperate useState hook.


  const completed = tasks.filter((t) => t.done).length;
  const active    = tasks.length - completed;
  const visible   =
    filter === 'all'    ? tasks :
    filter === 'done'   ? tasks.filter((t) => t.done) :
                           tasks.filter((t) => !t.done);
//==VALUES NOT DERIVED FROM STATE======================
//Operator adds new  task at the end of the newly created array function.
//crypto.randomUUID() creates a new ID so that React can identify each task and update them efficiently.

  function handleAdd(title) {
    setTasks([...tasks, { id: crypto.randomUUID(), title, done: false }]);
  }
  //==EVENT HANDLERS======================
  // .map() is used to return a new array of tasks with the updated values
  //React re-reads the ternary operator and changes background of the app if it detects changes in the array of tasks.
  //The spread operator {...t} copies the task object and updates !t.done and then toggles the boolean value done.

  function handleToggle(id) {
    setTasks(tasks.map((t) => t.id === id ? { ...t, done: !t.done } : t));
  }
  //The .filter() creates a new array of tasks and React detects the change and re-renders the app which deletes the task.
 function handleDelete(id)  { setTasks(tasks.filter((t) => t.id !== id)); }
  function handleClearDone() { setTasks(tasks.filter((t) => !t.done)); }
//==REDERING======================
  return (
    <div className="max-w-lg mx-auto p-6">
      {/* TaskStats is a child component of TaskBoard which receives the counts of total completed tasks as seperate props
      so it can display them on the screen without needing to access the task array.
      onClearCompleted is a callback function that passes down so TaskStats can call it whenever */}
      <TaskStats                      
        total={tasks.length} completed={completed} active={active}
        onClearCompleted={handleClearDone}
      />
      {/* AddTaskForm is a child component of TaskBoard which receives the handleAdd function as a prop so it can call it whenever the user submits a new task. */}
      <AddTaskForm onAdd={handleAdd} />
      {/* Mapping over the filter options and creating a butto for each one */}
      <div className="flex gap-2 mb-4">
        {['all', 'active', 'done'].map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded text-sm
              ${filter === f ? 'bg-green-700 text-white' : 'border'}`}
          >{f}</button>
        ))}
      </div>
      <TaskList                       
        tasks={visible}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
    
  );
}

