// 使用typescript编写react

// 内联语法
const Mybutton = ({title, name}: { title: string, name: string }) => {
    return (
        <>
            <h4>{name}</h4>
            <button> {title} </button>
        </>
    )
}


export default function App() {
    return (
        <>
            <Mybutton title={'我是一个按钮'} name={'小明'}></Mybutton>
        </>
    )
}