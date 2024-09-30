import React, {
    useReducer,
    useEffect,
    useRef,
    useImperativeHandle,
} from 'react';

interface State {
    count1: number;
}

interface RefProps {
    a: () => void;
}

type Action = { type: 'increment' };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count1: state.count1 + 1,
            };
        default:
            return state;
    }
};

const Child: React.ForwardRefRenderFunction<RefProps> = (
    props,
    ref: HTMLElement
) => {
    const InputRef = useRef<HTMLInputElement>(null);
    // 向外暴露方法 在父组件中使用
    useImperativeHandle(ref, () => {
        return {
            f() {
                InputRef.current.focus();
            },
        };
    }, [InputRef]);

    return (
        <div>
            <input ref={InputRef}></input>
        </div>
    );
};

// 子组件传递 ref 到父组件
const WrapedChild = React.forwardRef(Child);

const App: React.FC = () => {
    const ref = useRef<RefProps>(null);
    const [state, dispatch] = useReducer(reducer, { count1: 0 });

    useEffect(() => {
        console.log('Component mounted', ref.current);
        console.log('Component mounted', ref.current.f());
    }, []);

    const handleClick = () => {
        dispatch({ type: 'increment' });
    };

    return (
        <div>
            <WrapedChild ref={ref}></WrapedChild>{' '}
            <WrapedChild ref={ref}></WrapedChild>{' '}
            <WrapedChild ref={ref}></WrapedChild>
        </div>
    );
};

export default App;
