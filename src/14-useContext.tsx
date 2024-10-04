import React, { createContext, useContext } from 'react';
import { LevelContext } from './utils/LevelContext.ts';
// useContext 夸任意组件传递数据
const countContext = createContext(111);
interface Val {
    val: string | number;
}
const Acom = ({ val }: Val) => {
    return (
        <div>
            <LevelContext.Provider value={val}>
                <Bcom></Bcom>
            </LevelContext.Provider>
        </div>
    );
};

const Bcom = () => {
    return (
        <div>
            <Ccom></Ccom>
        </div>
    );
};

const Ccom = () => {
    const count = useContext(LevelContext);
    return <div>count is {count}</div>;
};
const App: React.FC = () => {
    const [num, setNum] = React.useState(23);
    return (
        <div>
            <Acom val={num} />
        </div>
    );
};

export default App;
