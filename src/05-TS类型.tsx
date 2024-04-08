// TS类型

import React, { useState, useCallback } from 'react';
import './public.css';
import img from './assets/oDHK8m7v0O.jpg';
import { UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';

const Card = () => {
	return (
		<>
			<div className={'content'}>
				<div className={'leftBox'}>
					<img width={'100%'} height={'100%'} src={img} alt="" />
				</div>
				<div className={'rightBox'}>
					<div className={'text'}>
						<div className={'leftText'}> Beige Wooden Bar Stool</div>
						<div className={'rightText'}> $40</div>
					</div>
					<p className={'pText'}>Greater Toronto Area</p>
					<p className={'pText'}>
						Rustic, hand-crafted bar stool. Easy to movethanks to the hole in
						the seat.
					</p>
					<div className={'btn'}>
						<div className={'leftBtn'}>
							{/*<Button danger>Delete Listing</Button>*/}
							<span style={{ color: '#ff4d4f', fontSize: '13px' }}>
								{' '}
								Delete Listing{' '}
							</span>
						</div>
						<div className={'rightBtn'}>
							<Button
								type="primary"
								style={{
									background: '#ebf3f6',
									color: '#648091',
									marginRight: '10px'
								}}
							>
								Edit
							</Button>
							<Button type="primary" style={{ background: '#3b819a' }}>
								Publish
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

// 描述子元素两种常见的方法
// 第一种方法React.ReactNode
// 第二种方法React.ReactElement
// 样式属性
// 在React中使用内联样式时,可以使用React.CSSProperties传递给style属性对象
// React.CSSProperties类型是所有可能的css类型集合
interface ModalRendererProps {
	title?: string;
	anyNode?: React.ReactNode; // 定义子元素的任意类型
	ele?: React.ReactElement; // 只包括jsx元素, 而不包括js原始类型
	style?: React.CSSProperties;
}

const ReactNodeElement = (props: ModalRendererProps) => (
	<>
		<div>React.ReactNode: {props.anyNode} </div>
		<div> React.ReactElement {props.ele} </div>
	</>
);

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

	const [value, setValue] = useState('Change me');

	const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
		(event) => {
			setValue(event.currentTarget.value);
		},
		[setValue]
	);

	// 常见类型
	// 当逐渐适应React 和 TS 的搭配使用后, 可以尝试阅读@types/react,此库提供了一整套类型
	// 你可以在DefinitelyTyped的React目录中找到它们,我们将在这里介绍一些比较常见的类型

	// DOM事件
	// 在React中处理DOM事件时,事件的类型通常可以从事件处理程序中推断出来,但是,当你想提取一个函数以传递给事件处理程序时,
	// 你需要明确设置事件的类型

	const [inputValue, setInputValue] = useState('');

	// DOM事件 明确设置事件类型
	// DOM常用事件示例: https://developer.mozilla.org/zh-CN/docs/Web/Events
	// 官网类型示例: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/b580df54c0819ec9df62b0835a315dd48b8594a9/types/react/index.d.ts#L1247C1-L1373
	const changeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event);
		setInputValue(event.currentTarget.value);
	};

	return (
		<>
			<Card></Card>

			<div style={{ marginTop: '20px' }}>
				<Input
					placeholder="default size"
					prefix={<UserOutlined />}
					value={value}
					onChange={handleChange}
				/>
				<input value={inputValue} onChange={changeEvent} />
				<p> 值: {value} </p>
			</div>

			{/*示例*/}
			{/* 示例中:
                    anyNode可以接收任意类型的jsx元素以及js原始类型
                    ele只接收jsx元素类型,并不包括js元素类型
                    title定义为字符串
             */}
			<ReactNodeElement
				anyNode={<p style={{ color: 'red' }}> 我是一个p标签 </p>}
				ele={<div>我是一个div</div>}
				title={'我是一个字符串'}
			></ReactNodeElement>
			<ReactNodeElement anyNode={1}></ReactNodeElement>
		</>
	);
}

export default App;
