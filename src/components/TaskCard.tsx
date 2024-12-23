import Task from "@/task";
import Todo from "@/assets/todo.png";
import Check from "@/assets/check.png";
import Trash from "@/assets/trash.png";
import Image from "next/image";
import { useState } from "react";

type TaskCardProps = {
  task: Task;
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
};

export default function TaskCard(props: TaskCardProps) {
  const { setTasks, tasks } = props;
  const initTask = props.task;
  const [task, setTask] = useState<Task>(initTask);

  const statusImg = task?.status == "COMPLETED" ? Check : Todo;

  return (
    <div className="w-full flex bg-darkerGray my-6 rounded-2xl">
      <button
        onClick={() => {
          const updatedTask: Task = {
            ...task,
            status: task.status == "COMPLETED" ? "TODO" : "COMPLETED",
          };

          fetch(`http://localhost:8080/tasks/${task.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTask),
          }).then((resp) => {
            setTask(updatedTask);
            const updatedTasks = tasks.map((otherTask) => {
              if (otherTask.id == updatedTask.id) return updatedTask;
              return otherTask;
            });
            setTasks(updatedTasks);
          });
        }}
      >
        <Image src={statusImg} className="m-2 md:m-8" alt="Toggle status" />
      </button>
      <a
        href={`/edit/${task.id}`}
        className="m-2 md:m-8 flex-1 text-lightGray text-2xl"
      >
        {task.title}
      </a>
      <button
        onClick={() => {
          fetch(`http://localhost:8080/tasks/${task.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }).then((resp) => {
            const remainingTasks = tasks.filter((otherTask) => {
              return task.id != otherTask.id;
            });
            setTasks(remainingTasks);
          });
        }}
      >
        <Image src={Trash} className="m-2 md:m-8" alt="Delete task" />
      </button>
    </div>
  );
}
