import React, { useState, ChangeEvent } from 'react';
import { Button, Input, Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
const App = () => {
    function createTodos() {
        console.log('1');
    }
    const [todos, setTodos] = useState(() => createTodos());

    // 为组件添加状态
    const [age, setAge] = useState(42);
    const [name, setName] = useState('Taylor');
    const [text, setText] = useState('hello');
    const [check, setCheck] = useState(false);

    const [newName, setNewName] = useState('小明');
    const [newAge, setNewAge] = useState(18);
    function handleClick() {
        setName('Robin');
        setAge((a) => a + 2);
        setText('hello');
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('当前事件对象', e);
        setText(e?.target?.value);
    };

    const checkChange: CheckboxProps['onChange'] = () => {
        setCheck(() => !check);
    };
    return (
        <>
            <div>
                {name}
                <div>{age}</div>

                <div>
                    <Input
                        value={text}
                        onChange={handleChange}
                        placeholder="Basic usage"
                    />
                    {text}
                </div>

                <div>
                    <Checkbox checked={check} onChange={checkChange}>
                        {check ? 'check' : 'no check'}
                    </Checkbox>
                </div>
                <Button onClick={() => handleClick()} type="primary">
                    Primary Button
                </Button>

                <div>
                    <Input
                        value={newName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setNewName(e.target.value)
                        }
                        placeholder="Basic usage"
                    />
                    <Button
                        type="primary"
                        onClick={() => setNewAge(newAge + 1)}
                    >
                        按钮
                    </Button>
                    Hello,{newName}, you are {newAge}
                </div>
            </div>

            <div>
                
                {/* 表单对象 */}


            </div>
        </>
    );
};

export default App;
