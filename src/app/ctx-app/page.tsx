import TaskList from "@/components/app-context/TaskList";
import AddTask from "@/components/app-context/AddTask";

export default function ContextApp() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 className="m-8 text-xl font-bold">TODOS APP WITH CONTEXT</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "50px",
          width: "600px",
        }}
      >
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}
