import React, { useState, useEffect, useReducer, ChangeEvent } from 'react';

// React 中的受控模式
// 由用户去改变 代码中通过 onChange 去设置 value 既受控模式

// 非受控模式

// 代码设置初始值 defaultValue 但是能改变 value 的只有用户 通过 onChange 来拿到最新的值
// 或者是 ref 拿到 dom 后读取 value
const App: React.FC = () => {
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    };
    return (
        <div>
            <div>
                input:{' '}
                <input type="text" defaultValue={'value'} onChange={onChange} />
            </div>
        </div>
    );
};

export default App;
