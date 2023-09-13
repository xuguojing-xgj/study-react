// 使用typescript编写react

// 内联语法
import {useState} from "react";

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
    diffEnabled: number;
    diffStatus: string;
    //按钮文字
    title: string;
    //按钮是否禁用
    disabled: boolean;
    clickFunc: () => void;
}

const MyBottons = ({diffEnabled, diffStatus, title, disabled, clickFunc}: MyButtonProps) => {
    return (
        <>
            <h5> {diffEnabled} </h5>
            <h5> {diffStatus} </h5>
            <button disabled={disabled} onClick={clickFunc}> {title} </button>
        </>
    )
}

// 联合类型
type Status = "idle" | "loading" | "success" | "error";
// type RequestState =
//     | { status: 'idle' }
//     | { status: 'loading' }
//     | { status: 'success', data: 'any' }
//     | { status: 'error', error: Error }
export default function App() {
    // hooks类型声明 基本类型
    const [enabled, setEnabled] = useState<number>(0)

    const [status, setStatus] = useState<Status>('idle')

    // const [requestState, setRequestState] = useState<RequestState>({status: 'idle'})
    function fatherFunc() {
        // setEnabled('2')
        // state快照
        // 命名惯例 通常以通过相应 state 变量的第一个字母来命名更新函数的参数
        // React更新加入队列
        // 批处理
        setEnabled(e => e + 2)
        console.log('enabled', enabled)
        if (status != 'success') {
            setStatus('error')
            console.log('status', status)
        }
    }

    return (
        <>
            <MyButton title={'我是一个按钮'} name={'小明'}></MyButton>
            <br/>
            <MyBottons diffEnabled={enabled} diffStatus={status} title={'我是禁用按钮'} disabled={false}
                       clickFunc={fatherFunc}></MyBottons>
        </>
    )
}