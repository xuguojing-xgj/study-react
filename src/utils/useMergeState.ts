import { useRef, useState, useEffect, useCallback } from 'react';
import { SetStateAction } from 'npm:@types/react@^18.2.66';

interface Props<T> {
    defaultValue?: T;
    value?: T;
    onChange?: (value: T) => void;
}

// 受控 or 非受控

export default function useMergeState<T>(defaultStateValue: T, props: Props<T>): [T, React.Dispatch<React.SetStateAction<T>>] {
    const { defaultValue, value: propsValue, onChange } = props || {};
    const isFirstRender = useRef(true);


    const [stateValue, setStateValue] = useState<T>(() => {
        if (propsValue !== undefined) {
            return propsValue
        } else if (defaultValue !== undefined) {
            return defaultValue
        } else {
            return defaultStateValue
        }
    })


    useEffect(() => {
        if (propsValue === undefined && !isFirstRender.current) {
            setStateValue(propsValue)
        }


        isFirstRender.current = false;
    }, [propsValue])

    const mergeValue = propsValue === undefined ? stateValue : propsValue;

    // value is Function  类型谓词 value 为 参数名 is 固定写法 Function 为类型
    // 一种特殊的返回注解
    function isFunction(value: unknown): value is Function {
        return typeof value === 'function'
    }


    const setState = useCallback((value: SetStateAction<T>) => {
        let res = isFunction(value) ? value(stateValue) : value;

        if (propsValue === undefined) {
            setStateValue(res);
        }
        // 链式操作符 如果 onChange 不是 null or undefined 则执行并传入参数
        onChange?.(res)
    }, [stateValue])

    return [mergeValue, setState]
}