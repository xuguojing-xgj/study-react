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


const BottomModule = () => {
    return (
        <>
            <div style={{position:"fixed", bottom:0, width:'100%', height:'50px', textAlign:'center',lineHeight:'50px'}}>
                <a style={{color:'#000'}} href="https://beian.miit.gov.cn/" target="_blank">备案号:京ICP备2023032161号-1</a>
            </div>
        </>
    )
}

function App() {

    return (
        <>
            <div className={'landscape'}>
                <div className={'son'}>
                    {/*宋代苏轼的《点绛唇·闲倚胡床》 */}
                    <div className={'sizeStyle'}>
                        闲倚胡床，庾公楼外峰千朵。与谁同坐。明月清风我。
                        <br/>
                        <div style={{
                            width: '100%',
                            textAlign: 'end',
                            fontSize: '16px',
                            margin: '10px 0'
                        }}>-宋代苏轼的《点绛唇·闲倚胡床》
                        </div>
                    </div>
                    {/*<img className={'_a3img'} src={_a3} alt={''}/>*/}
                    {/*<img className={'_a3img'} src={_a7} alt={''}/>*/}
                    {/*<img className={'_a3img'} src={_a8} alt={''}/>*/}
                    <img className={'_a3img'} src={_a9} alt={''}/>
                </div>
            </div>

            <BottomModule></BottomModule>
        </>
    )
}

export default App