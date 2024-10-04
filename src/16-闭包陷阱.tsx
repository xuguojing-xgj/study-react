import React, { useState, useEffect, useReducer } from 'react';

interface Action {
    type: 'add' | 'minus';
    num: number;
}
const reducer = (state: number, action: Action) => {
    switch (action.type) {
        case 'add':
            return state + action.num;
        case 'minus':
            return state - action.num;
        default:
            state;
    }
};

const App: React.FC = () => {
    const [count, setCount] = useState(0);
    const [num, dispatch] = useReducer(reducer, 0);
    useEffect(() => {
        const timer = setInterval(() => {
            console.log(num);
            // 闭包陷阱
            // setCount(count + 1);
            // setCount((count: number) => count + 1);
            dispatch({ type: 'add', num: 1 });
        }, 2000);

        return () => {
            clearInterval(timer);
        };
    }, [num]);
    return (
        <div>
            <div>
                {count} {num}
            </div>
        </div>
    );
};

export default App;
