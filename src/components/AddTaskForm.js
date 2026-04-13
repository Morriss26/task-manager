//=═════════════════════════════════════════════════════
//COMPONENT: AddTaskForm
//PURPOSE: The bix where users input new tasks.
// This component is a child prop and doesn't store 
// the task list itself.
//TYPE: Client Component
//═════════════════════════════════════════════════════

'use client';

import { useState } from 'react';

export default function AddTaskForm({ onAdd }) {
  //Only stores the title of the task that the user is currently typing in.
  //The state stays local to this component because nothing else in the app needs to know 
  //what the user is typing until they submit the form.

  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    //e.preventDefault() is used to prevent the browser from refreshing the page
    //when the form is submitted, this prevents the app from resetting.
    e.preventDefault();
    //.trim() is used to remove any whitespace from both ends of the string
    if (!title.trim()) return;
    //Sends the title of the task up to the TaskBoard using the onAdd callback function.
    //The Taskboard then adds it
    onAdd(title.trim());
    setTitle('');

  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6">
      <div className= "flex gap-2">
      <input
        value={title}                  
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task..."
        className="flex-1 border rounded px-3 py-2 text-sm"
      />
      <button
        type="submit"
        className="bg-green-700 text-white px-4 py-2 rounded text-sm hover:bg-green-800"
      >Add</button>
    </div>
    </form>
  );
}
