// react 组件是返回标签的 JavaScript 函数
// react 组件必须以大写开头 而HTML标签则必须以小写开头
import './public.css';
import React from "react";
import {useState} from "react";
// React 程序是由"组件"组成的。一个组件是UI(用户界面)的一部分, 它拥有自己的逻辑和外观。
// 组件可以小到一个按钮,也可以大到整个页面
interface MySquare {
    digit: number | string
}
const Square: React.FC<MySquare> = ({digit}) => {
    const [value, setValue] = useState(null)
    function handleClick() {
        console.log('clicked!')
    }
    return (
        <>
            <button className="square" onClick={handleClick}>{digit}</button>
        </>
    )
}

function App() {
    return (
        <>
            <div className={"board-row"}>
                <Square digit={1}/>
                <Square digit={2}/>
                <Square digit={3}/>
            </div>
            <div className={"board-row"}>
                <Square digit={4}/>
                <Square digit={5}/>
                <Square digit={6}/>
            </div>
            <div className={"board-row"}>
                <Square digit={7}/>
                <Square digit={8}/>
                <Square digit={9}/>
            </div>
        </>
    )
}

export default App;

