import React, { useState, useEffect, useReducer, ChangeEvent } from 'react';
import useMergeState from './utils/useMergeState.ts';

// React 中的受控模式
// 由用户去改变 代码中通过 onChange 去设置 value 既受控模式

// 非受控模式

// 代码设置初始值 defaultValue 但是能改变 value 的只有用户 通过 onChange 来拿到最新的值
// 或者是 ref 拿到 dom 后读取 value
const App: React.FC = () => {
    const [val, setVal] = useState('value');
    console.log('render ...');
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    const handerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setVal(event.target.value);
    };

    const [value, setValue] = useState(new Date(''));
    return (
        <div>
            <div>
                {/* 非受控模式 */}
                input:{' '}
                <input type="text" defaultValue={'value'} onChange={onChange} />
            </div>

            <div>
                {/* 受控模式 */}
                input:{' '}
                <input type="text" value={val} onChange={handerOnChange} />
            </div>

            {/* 日历组件 非受控模式 */}
            <div>
                <Calendar
                    defaultValue={new Date('2024-6-11')}
                    onChange={(date: Date) => {
                        console.log(date.toLocaleDateString());
                    }}
                ></Calendar>
            </div>
            {/* 日历组件 受控模式 */}
            <div>
                <Calendar
                    value={value}
                    onChange={(date: Date) => {
                        console.log(date.toLocaleDateString());
                        setValue(date);
                    }}
                ></Calendar>
            </div>
        </div>
    );
};

interface CalendarProps {
    value?: Date;
    defaultValue?: Date;
    onChange?: (date: Date) => void;
}

const Calendar: React.FC = (props: CalendarProps) => {
    const { value: propsValue, onChange, defaultValue } = props;

    const [mergedValue, setValue] = useMergeState(new Date('2024-8-10'), {
        value: propsValue,
        defaultValue,
        onChange,
    });
    // const changeValue = (date: Date) => {
    //     if (propsValue === undefined) {
    //         setValue(date);
    //     }
    //     onChange?.(date);
    // };

    return (
        <div>
            {mergedValue?.toLocaleDateString()}
            <div
                onClick={() => {
                    setValue(new Date('2024-5-1'));
                }}
            >
                2023-5-1
            </div>
            <div
                onClick={() => {
                    setValue(new Date('2024-5-2'));
                }}
            >
                2023-5-2
            </div>
            <div
                onClick={() => {
                    setValue(new Date('2024-5-3'));
                }}
            >
                2023-5-3
            </div>
        </div>
    );
};

export default App;
