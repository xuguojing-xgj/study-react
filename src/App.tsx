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
import {Profile} from "./components/Gallery.tsx";
import React from 'react';
import {Space, Table, Tag} from 'antd';
import type {ColumnsType} from 'antd/es/table';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher', 'hello'],
    },
];

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, {tags},index) => (
            <>
                {'当前行的值:'}{_}
                {'当前行数据:'}{tags}
                {'当前索引:'}{index}
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                      <>
                          {'当前tag:'}{tag}
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
        title: 'Action',
        key: 'action',
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
 * columns 表格列配置  类型: ColumnsType[]
 * render函数 生成复杂数据的渲染函数 参数: 1.当前行的值 2.当前行的数据 3.行索引
 */
const MyTable: React.FC = () => <Table columns={columns} dataSource={data} pagination={false}></Table>

function App() {
    return (
        <>
            <Gallery></Gallery>
            <Profile></Profile>

            <MyTable></MyTable>
        </>
    )
}

export default App