import * as React from 'react';
import { Button, Input } from 'antd';
export interface TaskType {
    todo: TodoType;
    onMyChange: any;
    onDelete: any;
}

const Task = ({ todo, onMyChange, onDelete }: TaskType) => {
    const [isEditing, setIsEditing] = React.useState(false);

    let todoContent;

    if (isEditing) {
        todoContent = (
            <>
                <input
                    value={todo.title}
                    onChange={(e) => {
                        onMyChange({
                            ...todo,
                            title: e.target.value,
                        });
                    }}
                    style={{ width: '200px' }}
                ></input>
                <button type="button" onClick={() => setIsEditing(false)}>
                    {' Save '}
                </button>
            </>
        );
    } else {
        todoContent = (
            <>
                {todo.title}
                <button type="button" onClick={() => setIsEditing(true)}>
                    {' Edit '}
                </button>
            </>
        );
    }

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={(e) => {
                        onMyChange({
                            ...todo,
                            done: e.target.checked,
                        });
                    }}
                ></input>
                {todoContent}
                <button type="button" onClick={() => onDelete(todo.id)}>
                    {'Delete'}
                </button>
            </label>
        </>
    );
};

export interface TodoType {
    id: number;
    title: string;
    done: boolean;
}

export interface TaskListType {
    todos: TodoType[];
    onChangeTodo: any;
    onDeleteTodo: any;
}

export default function TaskList({
    todos,
    onChangeTodo,
    onDeleteTodo,
}: TaskListType) {
    return (
        <>
            <ul>
                {todos.map((todo: TodoType) => (
                    <li key={todo.id}>
                        <Task
                            todo={todo}
                            onMyChange={onChangeTodo}
                            onDelete={onDeleteTodo}
                        ></Task>
                    </li>
                ))}
            </ul>
        </>
    );
}
