import React from 'react';
import {TaskType} from "../../../App";

type PropsType = {
    tasks: TaskType
}

export const Task = (props: PropsType) => {
    return (
        <li>
            <input type="checkbox" checked={props.tasks.isDone}/>
            <span>{props.tasks.title}</span>
        </li>
    );
};
