import TaskCard from '@/components/TaskCard';
export default function HomePage() {
  return (
    <div className="p-8">
       <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskCard title="Buy milk"    done={false} />
      <TaskCard title="Write tests" done={true}  />
      <TaskCard title="Ship it"     done={false} />
    </main>
  </div>
  );
}