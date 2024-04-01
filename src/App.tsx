// 组件: UI构成要素 HTML CSS JavaScript
// 定义组件
// React组件是一段可以使用标签进行扩展的JavaScript函数
// 第一步导出组件 export default
// 第二步定义函数 function Profile() { }
// React 组件名称必须以大写字母开头
// 第三步添加标签 function Profile() { return ( <> <h1> hello world </h1> </> ) }
// 组件返回 JSX标签

import { useState } from "react";
import "./css/01-index.css";

function App() {
  const [num, setNum] = useState(() => {
    const num1 = 1 + 2;
    const num2 = 2 + 3;

    return num1 + num2;
  });

    console.log(num); // 8
    
    const ClickFunction = () => {
        setNum(perv => perv + 1)
    }

  return (
    <>
      <div onClick={ClickFunction}> {num} </div>
    </>
  );
}

export default App;
