import React, { FC, ChangeEvent, useState } from 'react'
import { ITask } from './interfaces'
import './App.css'
import TodoTask from './components/TodoTask'

const App: FC = () => {
    const [task, setTask] = useState<string>('')
    const [deadline, setDeadline] = useState<number>(0)
    const [todoList, setToDoList] = useState<ITask[]>([])

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === 'task') {
            setTask(event.target.value)
        } else {
            setDeadline(Number(event.target.value))
        }
    }

    const addTask = (): void => {
        const newTask = { taskName: task, deadline: deadline }
        setToDoList([...todoList, newTask])
        setTask('')
        setDeadline(0)
        console.log(todoList)
    }

    const completeTask = (taskNameToDelete: string): void => {
        setToDoList(
            todoList.filter(task => {
                return task.taskName != taskNameToDelete
            })
        )
    }

    return (
        <div className='App'>
            <div className='header'>
                <div className='inputContainer'>
                    <input
                        type='text'
                        placeholder='Task...'
                        name='task'
                        value={task}
                        onChange={handleChange}
                    />
                    <input
                        type='number'
                        placeholder='Deadline (in Days)'
                        name='deadline'
                        onChange={handleChange}
                    />
                </div>
                <button type='submit' onClick={addTask}>
                    Add Task
                </button>
            </div>
            <div className='todoList'>
                {todoList.map((task: ITask, key: number) => {
                    return (
                        <TodoTask
                            key={key}
                            task={task}
                            completeTask={completeTask}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default App
