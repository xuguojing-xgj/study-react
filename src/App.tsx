// react 组件是返回标签的 JavaScript 函数
// react 组件必须以大写开头 而HTML标签则必须以小写开头
import './public.css';
import {useState} from "react";
// React 程序是由"组件"组成的。一个组件是UI(用户界面)的一部分, 它拥有自己的逻辑和外观。
// 组件可以小到一个按钮,也可以大到整个页面

const Square = () => {
    // 初始化状态
    const [value, setValue] = useState("")

    // 点击棋盘上的按钮设置x
    function handleClick() {
        setValue("x")
    }

    return (
        <>
            <button className="square" onClick={handleClick}> {value} </button>
        </>
    )
}

function App() {
    // 状态提升
    // 在父组件中声明共享state, 父组件可以通过props将state传回子组件, 使数据同步
    // Array(9).fill("") 创建了一个包含9个元素的数组, 并将每个元素设置为"",
    // ["","","x","x","x","o","o","o",""]
    const [squares, setSquares] = useState(Array(9).fill(""))

    return (
        // 构建棋盘
        <>
            <div className={"board-row"}>
                <Square value={squares[0]}/>
                <Square value={squares[1]}/>
                <Square value={squares[2]}/>
            </div>
            <div className={"board-row"}>
                <Square value={squares[3]}/>
                <Square value={squares[4]}/>
                <Square value={squares[5]}/>
            </div>
            <div className={"board-row"}>
                <Square value={squares[6]}/>
                <Square value={squares[7]}/>
                <Square value={squares[8]}/>
            </div>
        </>
    )
}

export default App;

