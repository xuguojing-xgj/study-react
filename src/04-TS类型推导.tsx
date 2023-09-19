// 使用typescript编写react

// 内联语法
import {useState, useReducer, createContext, useContext, useMemo} from "react";
import {CommentOutlined, CustomerServiceOutlined} from '@ant-design/icons';
import {Button, Steps, FloatButton,} from 'antd';
import './public.css';

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

// type Theme = 'light' | 'dark' | 'system' | {
//     kind: number
// };
type Theme = {
    kind: number
};
// 从传递给createContext调用的值推断context提供的值的类型
// 当没有一个合理的默认值时,这样编写是可以的,
// 而在这写情况下,null作为默认值可能感觉是合理的,但为了让类型系统理解你的代码,你需要在createContext上显示设置ContextShape | null
// 使用 | null 时 我们需要在 context consumer 中消除 | null 类型
// 我们建议在hook运行时检查 | null 的存在, 并不存在时抛出一个错误
const ThemeContext = createContext<Theme | null>(null);

// useContext 是一种无需通过组件传递props而可以直接在组件树中传递数据的技术,
// 它是通过创建provider组件使用,通常还会创建一个hook在子组件使用该值;
const useGetTheme = () => useContext(ThemeContext);

// 这个 hook 会在运行时检查context是否存在,不存在时抛出一个错误
const useGetThemeTypeIsNull = () => {
    const isNull = useGetTheme()
    if (!isNull) {
        throw new Error('useGetTheme must be used within a Provider')
    }
    return isNull
}

interface ThemeFunc {
    themeFunc: () => void;
}

const ThemeTemplate = ({themeFunc}: ThemeFunc) => {
    const theme = useGetThemeTypeIsNull()
    return (
        <>
            <div>
                <p>当前主题: {theme.kind}</p>
                <button onClick={themeFunc}>切换主题</button>
            </div>
        </>
    )

}
export default function App() {
    // hooks类型声明 基本类型
    const [enabled, setEnabled] = useState<number>(0);

    const [status, setStatus] = useState<Status>('idle');

    // const [requestState, setRequestState] = useState<RequestState>({status: 'idle'})
    // useReducer是一个更复杂的hook,它接受一个reducer函数和一个初始state作为参数,
    // 并将冲初始state推断出reducer函数的类型
    // 可以选择性地为useReducer提供类型参数以为state提供类型,
    // 但更高的做法仍然是在初始state上添加类型
    const [state, dispatch] = useReducer(stateReducer, initialState);

    // const [theme, setTheme] = useState<Theme>('light')
    const theme = useMemo(() => ({
        kind: 0
    }), []);

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

    function themeFunc() {

    }

    const addFive = () => dispatch({type: 'setCount', value: state.count + 1});
    const reset = () => dispatch({type: 'reset'});

    const [steps, ] = useState(2);
    const description = 'This is a description.';

    const [open, setOpen] = useState(false);

    const onChange = (checked: boolean) => {
        setOpen(checked);
    };
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

            <div className={'rectangle'}>
                {'我是一个div'}
                <div className={'triangle'}></div>
            </div>
            {/**/}
            <ThemeContext.Provider value={theme}>
                <ThemeTemplate themeFunc={themeFunc}></ThemeTemplate>
            </ThemeContext.Provider>
            {/*<Space >*/}
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="text">Text Button</Button>
            {/*</Space>*/}

            <Steps
                direction="vertical"
                current={steps}
                items={[
                    {
                        title: 'Finished',
                        description,
                    },
                    {
                        title: 'In Progress',
                        description,
                    },
                    {
                        title: 'Waiting',
                        description,
                    },
                ]}
            />

            <FloatButton.Group
                open={open}
                trigger="click"
                style={{right: 24}}
                onOpenChange={onChange}
                icon={<CustomerServiceOutlined/>}
            >
                <FloatButton/>
                <FloatButton icon={<CommentOutlined/>}/>
            </FloatButton.Group>
            {/*<Switch onChange={onChange} checked={open} style={{ margin: 16 }} />*/}
        </>
    )
}