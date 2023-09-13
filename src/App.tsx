// 使用typescript编写react

// 内联语法
import {useState, useReducer} from "react";

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

interface State {
    count: number
}

type CounterAction =
    | { type: "reset" }
    | { type: "setCount", value: State['count'] }

const initialState: State = {count: 0}

const stateReducer = (state: State, action: CounterAction): State => {
    switch (action.type) {
        case 'reset':
            return initialState;
        case 'setCount':
            return {...state, count: action.value}
        default:
            throw new Error('出错了')
    }
}
export default function App() {
    // hooks类型声明 基本类型
    const [enabled, setEnabled] = useState<number>(0)

    const [status, setStatus] = useState<Status>('idle')

    // const [requestState, setRequestState] = useState<RequestState>({status: 'idle'})
    // useReducer是一个更复杂的hook,它接受一个reducer函数和一个初始state作为参数,
    // 并将冲初始state推断出reducer函数的类型
    // 可以选择性地为useReducer提供类型参数以为state提供类型,
    // 但更高的做法仍然是在初始state上添加类型
    const [state, dispatch] = useReducer(stateReducer, initialState)

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

    const addFive = () => dispatch({type: 'setCount', value: state.count + 1})
    const reset = () => dispatch({type: 'reset'})
    return (
        <>
            <MyButton title={'我是一个按钮'} name={'小明'}></MyButton>
            <br/>
            <MyBottons diffEnabled={enabled} diffStatus={status} title={'我是禁用按钮'} disabled={false}
                       clickFunc={fatherFunc}></MyBottons>
            <br/>
            <h3>计数器</h3>
            <p>计数: {state.count}</p>
            <button onClick={addFive}>加1</button>
            <button onClick={reset}>重置</button>
        </>
    )
}