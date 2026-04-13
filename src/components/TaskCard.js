// ══════════════════════════════════════════════════════
//PURPOSE: Shows a task on the screen and gets its information from the TaskList file and 
// and then tells the TaskBoard file when the user clicks on the toggle or delete buttons
//TYPE: Client Component
// ══════════════════════════════════════════════════════
'use client'
//Displays the tasks the user typed in
// Displays "done!" when the task is marked as complete and the boolean values true or false have been answered

export default function TaskCard({ title, done }) {
  return (
    //The background color switches between green and pink depending on the boolean value of done.
    //This is because React re-reads this ternary everytime the something is rendered.
  
    <div className={`flex items-center justify-between p-4 mb-2 border rounded 
      ${done ? 'bg-green-50 border-black-200' : 'bg-pink-100 border-black-200'}`}>
      
      <div className="flex items-center gap-2">
        {/* Bullet is a unicode character which uses <span> rather than a <ul> of <li>  */}

        <span className={ 'text-black-400'}>•</span>
        <span className={done
          ? 'line-through text-[#6B7280] font-serif'
          : 'text-gray-900 font-serif'}>
          {title}
        </span>
      </div>

      {done && (
        <span className="text-green-600 font-serif font-bold">Done !</span>
      )}
    </div>
  );
         
}