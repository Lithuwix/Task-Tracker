import React from 'react';

import './App.css';

import {TodoList} from "./Components/TodoList/TodoList";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const tasks_01: TaskType[] = [
    {id: '332', title: 'milk', isDone: true},
    {id: '756', title: 'chocolate', isDone: true},
    {id: '987', title: 'brains', isDone: false},
]
const tasks_02: TaskType[] = [
    {id: '978', title: 'js for kids', isDone: false},
    {id: '23', title: 'grokking algorithms', isDone: false},
    {id: '98', title: 'javascript ninja', isDone: false},
]

export const App = () => {

    console.log('app')

    return (
        <div className="App">
            <TodoList title='what to buy' tasks={tasks_01}/>
            <TodoList title='read it' tasks={tasks_02}/>
            <TodoList title='fsd' tasks={tasks_01}/>
        </div>
    );
}

export default App;
