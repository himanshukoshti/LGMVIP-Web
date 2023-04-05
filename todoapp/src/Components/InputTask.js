import React from 'react'
import { useState, useEffect } from 'react';
import './InputTask.css'

const InputTask = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });

    const [todo, setTodo] = useState("");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleInputChange = (e) => {
        setTodo(e.target.value);
    }

    const handleTodoSubmit = (e) => {
        e.preventDefault();

        if (todo !== "") {
            setTodos([...todos,
            {
                id: new Date().getTime(),
                text: todo.trim(),
                completed: false
            }
            ]);
        }
        setTodo("");
    }

    const completeTask = (id) => {
        console.log(id)
        let list = todos.map((task) => {
            let item = {};
            if (task.id == id) {
                item = { ...task, completed: !task.completed };
            }
            else {
                item = { ...task }
            }
            return item;
        })
        setTodos(list)
    }

    const deleteTask = (id) => {
        console.log(id)
        const removeItem = todos.filter((todo) => {
            return todo.id !== id
        })
        setTodos(removeItem)
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-11">
                        <form>
                            <div className="row webflow-style-input">
                                <div className="col-md-9 col-10">
                                    <input className="" type="text" placeholder="Write your todo" onChange={handleInputChange
                                    } value={todo}></input>
                                </div>
                                <div className="col-md-3 col-2 text-center submit_button">
                                    <button className="" type="submit" onClick={handleTodoSubmit}>
                                        <i className="bi bi-plus-lg"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {todos.map((todo) => (
                        <div className="col-md-7 col-10 mb-2" key={todo.id}>
                            <div className="row">
                                <div className="col-10 task_row">
                                    {
                                        todo.completed ? <strike>{todo.text}</strike> : todo.text
                                    }
                                </div>
                                <div className="col-1 task_button">
                                    <button className='complete_button' id={todo.id} onClick={() => completeTask(todo.id)}>
                                        <i className="bi bi-check-circle-fill"></i>
                                    </button>
                                </div>
                                <div className="col-1 task_button">
                                    <button className='delete_button' id={todo.id} onClick={() => deleteTask(todo.id)}>
                                        <i className="bi bi-trash3-fill"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default InputTask