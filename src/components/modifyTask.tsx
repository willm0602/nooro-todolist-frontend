/**
 * Component used to modify a single task
 */

import Task from "@/task"
import BlueLabel from "./blueLabel";
import SelectColor from "./selectColor";

type ModifyTaskProps = {
    task?: Task,
}

const DEFAULT_TASK: Task = {
    title: '',
    status: 'TODO'
}

export default function ModifyTaskComponent(props: ModifyTaskProps){
    const task = props.task || DEFAULT_TASK;

    return <>
        <BlueLabel text="Title" htmlFor="task-title"/>
        <input type="text"
               name="title"
               required
               id="task-title"
               placeholder="Ex. Brush your teeth"
               defaultValue={task.title}
               className="w-full bg-darkGray p-2 rounded-lg mt-3 mb-12 text-xl text-lightGray" />
        <BlueLabel text="Color" htmlFor="task-color"/>
        <SelectColor initColor={task.color}/>
    </>
}