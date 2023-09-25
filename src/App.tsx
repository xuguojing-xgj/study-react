// TS类型

import React, {useState, useCallback} from "react";
import './public.css';
import img from './assets/oDHK8m7v0O.jpg'
import {UserOutlined} from '@ant-design/icons';
import {Button, Input} from 'antd';


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
                            <span style={{color: '#ff4d4f', fontSize: '13px'}}> Delete Listing </span>
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

    // useCallback 会在第二个参数中传入依赖项保持不变的情况下,为函数提供相同的引用, 与 useMemo 类似
    // 函数的类型是根据第一个参数中的返回值进行推断的,如果希望明确指定,可以为这个钩子提供一个类型参数以指定函数类型

    // const handleClick = useCallback(() => { }, [todos])

    // 而在TS严格模式下, 使用useCallback 需要回调函数中的参数添加类型注解,这是因为回调函数的类型是根据函数返回值进行推断的
    // 如果没有参数那么类型就不能完全理解
    // 根据自身的代码风格偏好, 你可以使用React类型中的 *EventHandler 函数以在定义回调函数的同时为事件处理程序提供类型注解

    const [value, setValue] = useState("Change me")

    const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
        setValue(event.currentTarget.value)
    }, [setValue])

    // 常见类型
    // 当逐渐适应React 和 TS 的搭配使用后, 可以尝试阅读@types/react,此库提供了一整套类型
    // 你可以在DefinitelyTyped的React目录中找到它们,我们将在这里介绍一些比较常见的类型

    return (
        <>
            <Card></Card>

            <div style={{marginTop: '20px'}}>
                <Input placeholder="default size" prefix={<UserOutlined/>} value={value} onChange={handleChange}/>
                <input value={value} onChange={handleChange}/>
                <p> 值: {value} </p>
            </div>
        </>
    )

}


export default App