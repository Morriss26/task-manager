import TaskCard from '@/components/TaskCard';
export default function HomePage() {
  return (
    <div className="p-8">
       <main className="p-8">
      <h1 className="text-[#831843] font-serif text-4xl font-bold drop-shadow">Task Manager</h1>
      <TaskCard title="Finish Homework"    done={false} />
      <TaskCard title="Cook Dinner" done={true}  />
      <TaskCard title="Do laundry"     done={false} />
      
    </main>
  </div>
  );
}
