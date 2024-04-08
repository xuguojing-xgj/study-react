// 在jsx/tsx中使用大括号编写(读取)JavaScript

// 导入
import { EditOutlined, CheckCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Input } from 'antd';
// 组件

// 使用 jsx编写标签 & 在jsx中使用大括号编写JavaScript

function TodoList() {
	const person = {
		name: 'Gregorio Y. Zara',
		theme: {
			backgroundColor: 'skyblue',
			color: 'pink'
		}
	};
	const list = [
		{ id: 1, title: 'Invent new traffic lights' },
		{ id: 2, title: 'Rehearse a movie scene' },
		{ id: 3, title: 'Improve spectrum technology' }
	];
	const Items: React.ReactNode = list.map(
		(item: { id: number; title: string }) => {
			return <li key={item.id}>{item.title}</li>;
		}
	);
	return (
		<>
			<h1>{person.name}</h1>
			<img
				src="https://i.imgur.com/yXOvdOSs.jpg"
				alt="Hedy Lamarr"
				className="photo"
			/>
			<ul>{Items}</ul>
		</>
	);
}

const Password = () => {
	const [password, setPassword] = useState('123456');
	const [isShow, setIsShow] = useState(false);
	const setPwdFunc = () => {
		setIsShow(!isShow);
	};
	const savePwdFunc = () => {
		setIsShow(!isShow);
	};

	interface PwdType {
		str: string;
	}

	// 密码脱敏
	const pwdDesensitize = ({ str }: PwdType) => {
		return str.replace(/\w/g, '*');
	};
	return (
		<>
			<span>
				密码:
				{isShow ? (
					<Input
						placeholder="input password"
						style={{ width: 200 }}
						bordered={false}
						value={password}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setPassword(e.target.value)
						}
					/>
				) : (
					<span> {pwdDesensitize({ str: password })} </span>
				)}
				{isShow ? (
					<CheckCircleOutlined
						style={{ cursor: 'pointer' }}
						onClick={savePwdFunc}
					/>
				) : (
					<EditOutlined style={{ cursor: 'pointer' }} onClick={setPwdFunc} />
				)}
			</span>
		</>
	);
};

function App() {
	return (
		<>
			<section>
				<h1>Amazing scientists</h1>
				<TodoList></TodoList>

				<br />

				<div>
					<Password></Password>
				</div>
			</section>
		</>
	);
}

export default App;
