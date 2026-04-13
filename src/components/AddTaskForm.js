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
    //The Taskboard then adds it to the array of tasks in its own state.
    //This is called "lifting state up" and is a pattern where data flows up and down.

    onAdd(title.trim());
    //Resets the input back to the empty string after the form is submitted by user.
    //The user can then start typing the next task without having to manually delete the previous one.
    setTitle('');

  }
  return (
    //onSubmit is an event handler that catches both button clicks and the "enter" key.
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6">
      {/* This is a controlled input and the value prop is
       always set to the title state variable. This means that
       React can fully control  the input data and update it whenever the user types something. */}
      <div className= "flex gap-2">
      <input
        value={title}                  
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task..."
        className="flex-1 border rounded px-3 py-2 text-sm"
      />
      {/* type= "submit" connects this button to the form's event handler
      and it triggers the handleSubmit function the same way pressing the "enter" key does. */}
      <button
        type="submit"
        className="bg-green-700 text-white px-4 py-2 rounded text-sm hover:bg-green-800"
      >Add</button>
    </div>
    </form>
  );
}
