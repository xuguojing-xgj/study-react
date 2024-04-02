// 组件: UI构成要素 HTML CSS JavaScript
// 定义组件
// React组件是一段可以使用标签进行扩展的JavaScript函数
// 第一步导出组件 export default
// 第二步定义函数 function Profile() { }
// React 组件名称必须以大写字母开头
// 第三步添加标签 function Profile() { return ( <> <h1> hello world </h1> </> ) }
// 组件返回 JSX标签

//  组件的导入与导出
//  何为根组件?
//  在目前文件中所有组件都定义在默认导出的组件中 而 App 方法就为根组件
//  而有些根组件会声明在其他文件中 需要导出 才能在App组件中使用
//  如果使用 Next.js 那每个页面的根组件都会不一样

// 默认导出 要将导入文件时 不需要花括号
import Gallery from "./components/Gallery.tsx";
// 在同一个文件中 使用具名导出和默认导出
// 具名导出  使用 {} 来导入
import { Profile } from "./components/Gallery.tsx";
import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { getImageUrl } from "./components/utils.tsx";
import "./public.css";

interface DataType {
	key: string;
	name: string;
	age: number;
	address: string;
	tags: string[];
}

const data: DataType[] = [
	{
		key: "1",
		name: "John Brown",
		age: 32,
		address: "New York No. 1 Lake Park",
		tags: ["nice", "developer"],
	},
	{
		key: "2",
		name: "Jim Green",
		age: 42,
		address: "London No. 1 Lake Park",
		tags: ["loser"],
	},
	{
		key: "3",
		name: "Joe Black",
		age: 32,
		address: "Sydney No. 1 Lake Park",
		tags: ["cool", "teacher", "hello"],
	},
];

const columns: ColumnsType<DataType> = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		render: (text) => <a>{text}</a>,
	},
	{
		title: "Age",
		dataIndex: "age",
		key: "age",
	},
	{
		title: "Address",
		dataIndex: "address",
		key: "address",
	},
	{
		title: "Tags",
		key: "tags",
		dataIndex: "tags",
		render: (_, { tags }, index) => (
			<>
				{"当前行的值:"}
				{_}
				{"当前行数据:"}
				{tags}
				{"当前索引:"}
				{index}
				{tags.map((tag) => {
					let color = tag.length > 5 ? "geekblue" : "green";
					if (tag === "loser") {
						color = "volcano";
					}
					return (
						<>
							{"当前tag:"}
							{tag}
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						</>
					);
				})}
			</>
		),
	},
	{
		title: "Action",
		key: "action",
		render: (_, record) => (
			<Space size="middle">
				<a>Invite {record.name}</a>
				<a>Delete</a>
			</Space>
		),
	},
];

/**
 *
 * @constructor
 * columns 表格列配置  类型: ColumnsType[] 每列数据配置 包括头部
 * dataSource 数据源
 * pagination 是否显示分页
 * render函数 生成复杂数据的渲染函数 参数: 1.当前行的值 2.当前行的数据 3.行索引
 */
const MyTable: React.FC = () => <Table columns={columns} dataSource={data} pagination={false}></Table>;

interface SyntaxDataType {
	key: string;
	name: string;
	exportSyntax: string;
	importSyntax: string;
}

const syntaxData: SyntaxDataType[] = [
	{
		key: "1",
		name: "默认",
		exportSyntax: "export default function Button() {}",
		importSyntax: "import Button from './Button';",
	},
	{
		key: "2",
		name: "具名",
		exportSyntax: "export function Button() {}",
		importSyntax: "import { Button } from './Button';",
	},
];
// render函数 生成复杂数据的渲染函数 参数: 1.当前行的值 2.当前行的数据 3.行索引
const syntaxColumns: ColumnsType<SyntaxDataType> = [
	{
		title: "语法",
		dataIndex: "syntax",
		key: "syntax",
		render: (_, row) => {
			return (
				<>
					<span>{row.name}</span>
				</>
			);
		},
	},
	{
		title: "导出",
		dataIndex: "exportSyntax",
		key: "exportSyntax",
		render: (_, row) => {
			return (
				<>
					<Tag color={"geekblue"}>{row.exportSyntax}</Tag>
				</>
			);
		},
	},
	{
		title: "导入",
		dataIndex: "importSyntax",
		key: "importSyntax",
		render: (_, row) => (
			<>
				<Tag color={"green"}>{row.importSyntax}</Tag>
			</>
		),
	},
];

const SyntaxTbale = () => (
	<Table columns={syntaxColumns} dataSource={syntaxData} pagination={false}>
		{" "}
	</Table>
);

// 熟悉props Props 是我们自己传递给JSX标签的信息 但我们可以把任何的Props传递给自己的组建

// 定义组件

// 步骤二： 在子组件读取Props
// Props 可以让你独立思考父组件和子组件
// 例如 App 中的三个Avatar 可以改变 person 和 size 并不用考虑 如何使用它们
// 同样，也可以改变Avatar使用这些props方式 不考虑App
// 改写props 可以将props想象成一个'旋钮'， 它的作用与函数的参数相同 props正是组件的唯一参数
// React组件函数接受一个参数， 一个props对象
interface PersonType {
	name: string;
	imageId: string;
}
const Avatar = ({ person, size }: { person: PersonType; size: number }) => {
	return (
		<>
			{/*{person}*/}
			<img className="avatar" src={getImageUrl({ person, size })} alt={person.name} width={size} height={size} />
		</>
	);
};

// 改写Avatar组件
interface Person {
	name: string;
	imageId: string;
}
interface PropsType {
	person: Person;
	size: number;
}
// 熟悉类型
// 解构 等价与从函数参数中读取属性
const RewriteAvatar = (props: PropsType) => {
	console.log("props", props);
	const person = props.person;
	const size = props.size;
	console.log(person);
	console.log(size);
	return <></>;
};

// 给 prop 指定一个默认值
// 如果 在没有指定值的情况下给prop一个默认值 可以通过在参数后面写 = 和 默认值来进行解构
// 例如 ：
// const Avatar = ({person, size = 100 }) => {}

// 如果 <Avatar person={...} /> 渲染时 size 没有prop 则会被赋值为 100
// 默认值仅会在缺少 size 和 size 是 undefined 时生效 如果传递了 size={null} 或 size={0} 时默认值则不被使用

//
function App() {
	const [isTable] = useState<boolean>(false);
	return (
		<>
			<Gallery></Gallery>
			<Profile></Profile>

			{isTable ? <MyTable></MyTable> : <SyntaxTbale></SyntaxTbale>}
			{/*步骤一：将Props传递给子组件*/}
			{/*例如： person(一个对象) 和 size (一个数字)*/}
			{/*person=后面的双花括号 在JSX模板中它们只是一个对象*/}
			<Avatar size={100} person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }} />
			<Avatar size={80} person={{ name: "Aklilu Lemma", imageId: "OKS67lh" }} />
			<Avatar size={50} person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} />

			{/* 改写 Avatar 组件 */}
			<RewriteAvatar size={50} person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}></RewriteAvatar>
		</>
	);
}

export default App;
