import * as React from 'react';
import { Button, Input } from 'antd';
export interface TaskType {
    todo: any;
    onChange: any;
    onDelete: any;
}

export interface TaskListType {
    todos: any;
    onChangeTodo: any;
    onDeleteTodo: any;
}

const Task = ({ todo, onChange, onDelete }: TaskType) => {
    const [isEditing, setIsEditing] = React.useState(false);

    const handelTitle = (e: any) => {
        onChange({
            ...todo,
            title: e.target.value,
        });
    };

    const handelDone = (e: any) => {
        onChange({
            ...todo,
            done: e.target.checked,
        });
    };
    let todoContent;

    if (isEditing) {
        todoContent = (
            <>
                <Input
                    value={todo.title}
                    onChange={handelTitle}
                    style={{ width: '200px' }}
                ></Input>
                <Button type="primary" onClick={() => setIsEditing(false)}>
                    {' Save '}
                </Button>
            </>
        );
    } else {
        todoContent = (
            <>
                {todo.title}
                <Button type="link" onClick={() => setIsEditing(true)}>
                    {' Edit '}
                </Button>
            </>
        );
    }

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => handelDone}
                ></input>
                {todoContent}
                <Button type="link" danger onClick={() => onDelete(todo.id)}>
                    {'Delete'}
                </Button>
            </label>
        </>
    );
};
export default function TaskList({
    todos,
    onChangeTodo,
    onDeleteTodo,
}: TaskListType) {
    return (
        <>
            <ul>
                {todos.map((todo: any) => (
                    <li key={todo.id}>
                        <Task
                            todo={todo}
                            onChange={onChangeTodo}
                            onDelete={onDeleteTodo}
                        ></Task>
                    </li>
                ))}
            </ul>
        </>
    );
}
