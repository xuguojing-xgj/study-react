// 使用typescript编写react

// 内联语法
const MyButton = ({title, name}: { title: string, name: string }) => {
    return (
        <>
            <h4>{name}</h4>
            <button> {title} </button>
        </>
    )
}


// interface type 类型
interface MyButtonProps {
    //按钮文字
    title: string;
    //按钮是否禁用
    disabled: boolean;
}

const MyBottons = ({title, disabled}: MyButtonProps) => {
    return (
        <>
            <button disabled={disabled}> {title} </button>
        </>
    )
}

export default function App() {
    return (
        <>
            <MyButton title={'我是一个按钮'} name={'小明'}></MyButton>
            <br/>
            <MyBottons title={'我是禁用按钮'} disabled={true}></MyBottons>
        </>
    )
}