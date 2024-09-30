import React, { useReducer } from 'react';
import { produce } from 'immer';
interface Data {
    num: {
        num1: {
            num2: number;
            num3: {
                num4: number;
            };
        };
    };
}

interface Action {
    type: string;
    init: number;
}

const reducer = (state: Data, action: Action) => {
    console.log(state, action);
    switch (action.type) {
        case 'add':
            // return {
            //     ...state,
            //     num: state.num + action.init,
            // };
            return produce(state, (s) => {
                s.num.num1.num3.num4 += action.init;
            });
        case 'minus':
            return {
                ...state,
                num: state.num.num1.num3.num4 - action.init,
            };

        default:
            return state;
    }
};
const App = () => {
    const [state, dispatch] = useReducer<React.Reducer<Data, Action>>(reducer, {
        num: {
            num1: {
                num2: 0,
                num3: {
                    num4: 4,
                },
            },
        },
    });
    return (
        <div>
            <div>{JSON.stringify(state)}</div>
            <div>{JSON.stringify(state.num)}</div>
            <div onClick={() => dispatch({ type: 'add', init: 1 })}> 加 </div>
        </div>
    );
};

export default App;
