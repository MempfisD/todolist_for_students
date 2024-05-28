import React from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

let tasks1: Array<TaskType> = [
	{id: 1, title: 'HTML & CSS', isDone: true},
	{id: 1, title: 'JS', isDone: true},
	{id: 1, title: 'React', isDone: false}
]

let tasks2: Array<TaskType> = [
	{id: 1, title: 'Terminator', isDone: true},
	{id: 1, title: 'XXX', isDone: true},
	{id: 1, title: 'Gladiator', isDone: true}
]


function App() {
	return (
			<div className="App">
				<Todolist title={'What to learn'} tasks={tasks1}/>
				<Todolist title={'Movies'} tasks={tasks2}/>
			</div>
	);
}

export default App;
