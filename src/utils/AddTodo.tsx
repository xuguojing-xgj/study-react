import * as React from 'react';
import { Input, Button } from 'antd';
interface AddTodoType {
    onAddTodo: any;
}
export default function AddTodo({ onAddTodo }: AddTodoType) {
    const [title, setTitle] = React.useState('');

    return (
        <>
            <Input
                value={title}
                onChange={(e: HTMLInputElement) => setTitle(e.target.value)}
                placeholder="Add Todo"
                style={{ width: '50%' }}
            />
            <Button
                type="primary"
                onClick={() => {
                    setTitle('');
                    onAddTodo(title);
                }}
            >
                Add
            </Button>
        </>
    );
}
