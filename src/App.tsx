// 组件: UI构成要素 HTML CSS JavaScript
// 定义组件
// React组件是一段可以使用标签进行扩展的JavaScript函数
// 第一步导出组件 export default
// 第二步定义函数 function Profile() { }
// React 组件名称必须以大写字母开头
// 第三步添加标签 function Profile() { return ( <> <h1> hello world </h1> </> ) }
// 组件返回 JSX标签

import './css/01-index.css';
// import _a3 from './assets/3.jpg';
// import _a7 from './assets/7.jpg';
// import _a8 from './assets/8.jpg';
import _a9 from './assets/9.jpg';
function App() {

    return (
        <>
            <div className={'landscape'}>
                <div></div>
                {/*<img className={'_a3img'} src={_a3} alt={''}/>*/}
                {/*<img className={'_a3img'} src={_a7} alt={''}/>*/}
                {/*<img className={'_a3img'} src={_a8} alt={''}/>*/}
                <img className={'_a3img'} src={_a9} alt={''}/>
            </div>
        </>
    )
}

export default App