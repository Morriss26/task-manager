//=======================================
//COMPONENT: HomePage
//PURPOSE: The main element of the app and is the first
//component that Next.js renders when a user visits the app.
//Imports the TaskCard component and displays it on the screen.
//sets up the basic page layout and styling components.
//TYPE: Server Component
//========================================

import TaskCard from '@/components/TaskCard';
export default function HomePage() {
  return (
    //===OUTER WRAPPER ======================================
    //The outer wrapper includes the div element with padding around the 
    //entire page it keeps the content of the app readable on all 
    //screen sizes.
    <div className="p-8">
       <main className="p-8">
        {/*==PAGE TITLE=====================
        An <h1> element is used here as the title of the application
        text-[#831843] is a custom color from the tailwind config file and
         drop-shadow adds a shadow effect to the text to make it stand out more on the page. */}
      <h1 className="text-[#831843] font-serif text-4xl font-bold drop-shadow">Task Manager</h1>
      <TaskCard title="Finish Homework"    done={false} />
      <TaskCard title="Cook Dinner" done={true}  />
      <TaskCard title="Do laundry"     done={false} />
      {/*===HARDCODED TASK CARDS=======================
      The three TaskCard titles are hardcoded into the HomePage screen
      //instead of being generated dynamically from an array
      //Each TaskCard receives the title and done values as props and then renders them on the screen with different styles 
      // depending on the boolean value of done. */}
    </main>
  </div>
  );
}
