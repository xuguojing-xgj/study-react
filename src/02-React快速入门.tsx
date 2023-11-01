// react 组件是返回标签的 JavaScript 函数
// 声明 MyButton 组件
// react 组件必须以大写开头 而HTML标签则必须以小写开头
import './public.css'
// 从 React 引入 useState：
import React, {useState} from 'react';

interface MyButton {
    count: number;
    onClick: () => void;
}

// React 程序是由"组件"组成的。一个组件是UI(用户界面)的一部分, 它拥有自己的逻辑和外观。
// 组件可以小到一个按钮,也可以大到整个页面
const MyButton: React.FC<MyButton> = ({count, onClick}: { count: number, onClick: () => void }) => {
    return (
        <>
            <button onClick={onClick}> count is {count}</button>
        </>
    );
}


function App() {
    // 声明变量
    const [count, setCount] = useState(0)

    // 在组件中声明 事件处理 函数来响应事件
    function handleClick() {
        // alert('You Clicked me!')
        setCount(c => c + 1)
    }

    return (
        // 组件不可以返回多个jsx标签 必须将他们包裹到一个共享父级中
        // 比如 <div>...</div> 或者 使用空的 <>...</> 包裹
        <>
            <div style={{
                textAlign: 'center',
            }}>
                {/*组件中共享数据*/}
                {/*组件中共享数据 可以使用JSX 的大括号{} 向组件传递信息 */}
                <MyButton count={count} onClick={handleClick}></MyButton>
                <br/>
                <MyButton count={count} onClick={handleClick}></MyButton>
            </div>
        </>
    )
}

export default App;

