"use client";

import Task from "@/task";
/**
 * Forms that are used to make CRUD operations for
 * Tasks
 */

import { FormEvent, FormEventHandler } from "react";

const API_URL = "http://localhost:8080/tasks";

type TasksFormProps = {
  children: React.ReactElement | React.ReactElement[];
  method: "POST" | "GET" | "PUT" | "DELETE";
  className?: string;
};

export default function TasksForm(props: TasksFormProps) {
  const { children, method, className } = props;

  const submitTasksForm: FormEventHandler = (e) => {
    e.preventDefault();
    console.log("SUBMITTING");
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const formDataObject: Record<string, any> = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    const body = JSON.stringify(formDataObject);

    fetch(API_URL, {
      method,
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        window.location.href = "/";
      })
      .catch(console.error);
  };

  return (
    <form
      action={API_URL}
      method={method}
      className={className}
      onSubmit={submitTasksForm}
    >
      {children}
    </form>
  );
}
