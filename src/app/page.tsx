'use client';

import Link from '@/components/link';
import RoundedPlus from '@/assets/plus.png';
import Image from "next/image";
import { useEffect, useState } from 'react';
import Task from '@/task';
import BlueLabel from '@/components/blueLabel';
import PurpleLabel from '@/components/purpleLabel';
import TaskCard from '@/components/TaskCard';

function CreateTaskLink() {
  return <Link href="/create" className='mt-[-48px]'>
    Create Task <Image src={RoundedPlus} alt='' width={16} height={16} className='inline-block mt-[-4px]'/>
  </Link>
}

function TasksStatusBar(props: {tasks: Task[]}) {
  const {tasks} = props;

  const numCompleted = tasks.filter((task) => {
    return task.status == 'COMPLETED'
  }).length;

  return <div className='flex flex-col md:flex-row full justify-between pt-12'>
    <span className='inline-block'>
      <BlueLabel text="Tasks" />
      <span className='bg-darkGray text-lightGray ml-2 w-4 h-4 px-4 py-1 rounded-3xl'>{tasks.length}</span>
    </span>
    <span className='inline-block'>
      <PurpleLabel text="Completed" />
      <span className='bg-darkGray text-lightGray ml-2 w-4 h-4 px-4 py-1 rounded-3xl'>{numCompleted} of {tasks.length}</span>
    </span>
  </div>
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/tasks').then(async (resp) => {
      const body = await resp.json();
      setTasks(body);
    }).catch((err) => {console.error})
  }, [])

  return (
    <>
      <CreateTaskLink/>
      <TasksStatusBar tasks={tasks}/>
      {tasks.map((task: Task) => {
        return <TaskCard task={task} key={`task-${task.id}`} tasks={tasks} setTasks={setTasks}/>
      })}
    </>
  );
}
