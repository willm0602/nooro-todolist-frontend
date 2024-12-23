"use client";

import Image from "next/image";
import LeftIcon from "@/assets/left.png";
import Task from "@/task";
import React, { use, useEffect, useState } from "react";
import TasksForm from "@/components/tasksForm";
import ModifyTaskComponent from "@/components/modifyTask";
import Button from "@/components/button";
import Check from "@/assets/check2.png";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: id } = use(params);

  const [task, setTask] = useState<Task | undefined>();

  useEffect(() => {
    fetch(`http://localhost:8080/task/${id}`)
      .then((resp) => resp.json())
      .then((data) => setTask(data));
  }, [id]);

  if (!task) return <></>;

  return (
    <>
      <a href="/" className="cursor-pointer pb-12 block">
        <Image src={LeftIcon} alt="Go Home" />
      </a>
      <TasksForm method={"PUT"}>
        <ModifyTaskComponent task={task} />
        <Button className="flex items-center justify-center my-5">
          Save <Image src={Check} alt={""} className="ml-5"></Image>
        </Button>
      </TasksForm>
    </>
  );
}
