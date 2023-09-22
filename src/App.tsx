// TS类型

// import {useMemo} from "react";
import './public.css';
import img from './assets/oDHK8m7v0O.jpg'
import {Button,} from 'antd';


const Card = () => {
    return (
        <>
            <div className={'content'}>
                <div className={'leftBox'}>
                    <img width={'100%'} height={'100%'} src={img} alt=''/>
                </div>
                <div className={'rightBox'}>
                    <div className={'text'}>
                        <div className={'leftText'}> Beige Wooden Bar Stool</div>
                        <div className={'rightText'}> $40</div>
                    </div>
                    <p className={'pText'}>Greater Toronto Area</p>
                    <p className={'pText'}>Rustic, hand-crafted bar stool. Easy to movethanks to the hole in the
                        seat.</p>
                    <div className={'btn'}>
                        <div className={'leftBtn'}>
                            {/*<Button danger>Delete Listing</Button>*/}
                            <span style={{color:'#ff4d4f', fontSize:'13px'}}> Delete Listing </span>
                        </div>
                        <div className={'rightBtn'}>
                            <Button type="primary"
                                    style={{background: '#ebf3f6', color: '#648091', marginRight: '10px'}}>Edit</Button>
                            <Button type="primary" style={{background: '#3b819a'}}>Publish</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function App() {
    // useMemo 是一个React hook 它在每次重新渲染的时候能够缓存计算的结果;
    // filterTodos 的返回值推断 visibleTodos 的类型;
    // useMemo 性能优化
    // const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab])
    return (
        <>
            <Card></Card>
        </>
    )

}


export default App