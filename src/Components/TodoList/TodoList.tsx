import React from 'react';

import {TaskType} from "../../App";

import {Task} from "./Task/Task";

type PropsType = {
    title: string
    tasks: TaskType[]
}

export const TodoList = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(el => <Task key={el.id} tasks={el}/>)}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

