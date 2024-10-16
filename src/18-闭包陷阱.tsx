import React, { useState, useEffect } from 'react';

// 闭包陷阱

const App = () => {
    // 当 useEffect 依赖数组是 [] 时  count 被永远 "锁定" 在了效果创建时的值
    // 导致闭包的原因 依赖数组是空值时
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log(count);
            setCount(count + 1);
            // 正确示例
            // 使用函数式更新避免闭包陷阱
            // setCount(count => count + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [count]); // 或者正确使用 依赖数组
    return (
        <div>
            <div>{count}</div>
        </div>
    );
};

export default App;
