// react 组件是返回标签的 JavaScript 函数
// 声明 MyButton 组件
// react 组件必须以大写开头 而HTML标签则必须以小写开头
import './public.css'
// 从 React 引入 useState：
import {useState} from 'react';

// React 程序是由"组件"组成的。一个组件是UI(用户界面)的一部分, 它拥有自己的逻辑和外观。
// 组件可以小到一个按钮,也可以大到整个页面
function MyButton() {
    // 声明变量
    const [count, setCount] = useState(0)

    // 在组件中声明 事件处理 函数来响应事件
    function handleClick() {
        // alert('You Clicked me!')
        setCount(count + 1)
    }

    return (
        <>
            <button onClick={handleClick}> count is {count}</button>
        </>
    );
}


function App() {

    return (
        // 组件不可以返回多个jsx标签 必须将他们包裹到一个共享父级中
        // 比如 <div>...</div> 或者 使用空的 <>...</> 包裹
        <>
            <div style={{
                textAlign: 'center',
            }}>
                {/*组件中共享数据*/}
                <MyButton></MyButton>
                <br/>
                <MyButton></MyButton>
            </div>
        </>
    )
}

export default App;

