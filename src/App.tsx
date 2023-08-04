// react 组件是返回标签的 JavaScript 函数
// 声明 MyButton 组件
// react 组件必须以大写开头 而HTML标签则必须以小写开头
import './public.css'

function MyButton() {
    return (
        <button>这是个按钮</button>
    )
}

function AdminPanel() {
    return (
        <>
            <h1>AdminPanel</h1>
        </>
    )
}

function LoginForm() {
    return (
        <>
            <h1>LoginForm </h1>
        </>
    )
}

// 条件渲染
// React.ReactNode 是类型别名 用于表示可以作为 React 元素渲染的任何内容。
let content: React.ReactNode;
const isLoggedIn: boolean = true;
if (isLoggedIn) {
    content = <AdminPanel/>
} else {
    content = <LoginForm/>
}

function App() {

    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    }
    return (
        // 组件不可以返回多个jsx标签 必须将他们包裹到一个共享父级中
        // 比如 <div>...</div> 或者 使用空的 <>...</> 包裹
        <>
            <h1>Welcome to my app</h1>
            <MyButton></MyButton>
            <br/>
            {/*    添加样式*/}
            <h2>{user.name}</h2>
            {/*JSX 属性 “转义到 JavaScript”，必须使用大括号 而非 引号。*/}
            {/*可以把更为复杂的表达式放入 JSX 的大括号内，例如 字符串拼接：*/}
            {/*
             style={{}} 并不是特殊语法 而是 style={} JSX 大括号内的一个普通 (要读取的普通对象) {} 对象
             当你的样式依赖于 JavaScript 变量时，你可以使用 style 属性
             */}
            <img src={user.imageUrl} className={'avatar'} alt={'Photo of' + user.name} style={{
                width: user.imageSize,
                height: user.imageSize
            }}/>

            {/*条件渲染*/}
            {content}
        </>
    )
}

export default App;

