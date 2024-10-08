import TaskList from "@/components/app-redux/TaskList";
import AddTask from "@/components/app-redux/AddTask";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 className="m-8 text-xl font-bold">TODOS APP WITH REDUX</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "50px",
          width: '600px'
        }}
      >
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}
