// 组件: UI构成要素 HTML CSS JavaScript
// 定义组件
// React组件是一段可以使用标签进行扩展的JavaScript函数
// 第一步导出组件 export default
// 第二步定义函数 function Profile() { }
// React 组件名称必须以大写字母开头
// 第三步添加标签 function Profile() { return ( <> <h1> hello world </h1> </> ) }
// 组件返回 JSX标签

import React, { useEffect, useLayoutEffect, useState, useReducer } from 'react';
import type { Reducer } from 'react';
import './css/01-index.css';

async function queryData() {
	const data = await new Promise<number>((resolve) => {
		setTimeout(() => {
			resolve(666);
		}, 2000);
	});

	return data;
}

interface Data {
	result: number;
}

interface Action {
	type: 'add' | 'minus';
	num: number;
}

function reducer(state: Data, action: Action) {
	switch (action.type) {
		case 'add':
			return {
				result: state.result + action.num
			};
		case 'minus':
			return {
				result: state.result - action.num
			};
	}

	return state;
}

function App() {
	const [num, setNum] = useState(0);

	// 当依赖数组变化时就会执行 useEffect
	// 类似于 useLayouEffect
	// useEffect 执行时间长避免页面卡顿掉帧
	// useLayoutEffect 页面闪动问题比较严重可以使用
	useLayoutEffect(() => {
		console.log('effect');
		const timer = setInterval(() => {
			console.log(num);
		}, 1000);
		// queryData().then((res) => {
		// 	setNum(res);
		// });
		return () => {
			console.log('clear up');
			clearInterval(timer);
		};
	}, [num]); // 依赖数组

	// 修改值 之前做一些固定的逻辑 useReducer
	// const [state, dispatch] = useReducer(reducer, initialArg, init?)
	const [state, dispatch] = useReducer<Reducer<Data, Action>>(reducer, {
		result: 0
	});

	return (
		<>
			<div onClick={() => setNum((prevNum) => prevNum + 1)}> {num} </div>

			<button type="button" onClick={() => dispatch({ type: 'add', num: 1 })}>
				加
			</button>
			<button type="button" onClick={() => dispatch({ type: 'minus', num: 1 })}>
				减
			</button>

			<div> {state.result} </div>
		</>
	);
}

export default App;
