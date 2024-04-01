// react 组件是返回标签的 JavaScript 函数
// 声明 MyButton 组件
// react 组件必须以大写开头 而HTML标签则必须以小写开头
import "./public.css";
// 从 React 引入 useState：
import React, { useState } from "react";

// React 程序是由"组件"组成的。一个组件是UI(用户界面)的一部分, 它拥有自己的逻辑和外观。
// 组件可以小到一个按钮,也可以大到整个页面
function MyButton() {
	// 声明变量
	// useState 中获得的两样东西: 当前的 state(count), 以及用于更新它的函数(setCount)。
	// 你可以给它们(当前的state(count),和 更新它的函数(setCount))起任何名字
	// 但是要按照惯例,需要按照规定的命名方式为它们命名[something,setSomething]
	const [count, setCount] = useState(0);

	// 在组件中声明 事件处理 函数来响应事件
	function handleClick() {
		// alert('You Clicked me!')
		setCount(count + 1);
	}

	return (
		<>
			{/* 需要注意的是 onClick={handleClick} 的结尾没有小括号*/}
			{/* 不要<调用>事件处理函数 只需要传递给事件*/}
			{/* 当用户点击按钮时React就会调用你的事件来处理函数*/}
			<button onClick={handleClick}> count is {count}</button>
		</>
	);
}

function AdminPanel() {
	return (
		<>
			<h1>AdminPanel</h1>
		</>
	);
}

function LoginForm() {
	return (
		<>
			<h1>LoginForm </h1>
		</>
	);
}

function App() {
	// 条件渲染
	// React.ReactNode 是类型别名 用于表示可以作为 React 元素渲染的任何内容。
	let content: React.ReactNode;
	const isLoggedIn: boolean = true;
	if (isLoggedIn) {
		content = <AdminPanel />;
	} else {
		content = <LoginForm />;
	}
	const user = {
		name: "Hedy Lamar",
		imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
		imageSize: 90,
	};
	const products = [
		{ title: "Cabbage", isFruit: false, id: 1 },
		{ title: "Garlic", isFruit: false, id: 2 },
		{ title: "Apple", isFruit: true, id: 3 },
	];
	{
		/* React中的列表渲染 则依赖JavaScript 中的for循环 和 array的map()函数   */
	}
	const listItems = products.map((product) => (
		// key属性 用于在其兄弟节点中唯一标识该元素
		<li
			key={product.id}
			style={{
				color: product.isFruit ? "red" : "green",
			}}
		>
			{product.title}
		</li>
	));
	return (
		// 组件不可以返回多个jsx标签 必须将他们包裹到一个共享父级中
		// 比如 <div>...</div> 或者 使用空的 <>...</> 包裹
		<>
			<h1>Welcome to my app</h1>
			<br />
			{/*    添加样式*/}
			<h2>{user.name}</h2>
			{/*JSX 属性 “转义到 JavaScript”，必须使用大括号 而非 引号。*/}
			{/*可以把更为复杂的表达式放入 JSX 的大括号内，例如 字符串拼接：*/}
			{/*
             style={{}} 并不是特殊语法 而是 style={} JSX 大括号内的一个普通 (要读取的普通对象) {} 对象
             当你的样式依赖于 JavaScript 变量时，你可以使用 style 属性
             */}
			<img
				src={user.imageUrl}
				className={"avatar"}
				alt={"Photo of" + user.name}
				style={{
					width: user.imageSize,
					height: user.imageSize,
				}}
			/>

			{/*条件渲染*/}
			<div> {content} </div>
			{/* 条件运算符 与 if 不同的是 它运行与JSX内部 */}
			<div> {isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>
			{/* 当不需要else 分支时  当不写 {}  React渲染语法时 只会读取文本 必须要写 渲染 语法  {} */}
			<div> {isLoggedIn && <LoginForm></LoginForm>} </div>

			{/* 列表渲染 */}
			<ul>{listItems}</ul>

			{/*更新界面 使用React Hooks */}
			<MyButton></MyButton>
			<br />
			<MyButton></MyButton>
		</>
	);
}

export default App;
