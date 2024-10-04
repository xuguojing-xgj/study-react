import React, { useState, useEffect, memo, useCallback, useMemo } from 'react';

const Acom = () => {
    const [, setNum] = useState(1);
    const [count, setCount] = useState(2);
    useEffect(() => {
        setInterval(() => {
            setNum(Math.random());
        }, 2000);
    }, []);

    useEffect(() => {
        setInterval(() => {
            setCount(Math.random());
        }, 2000);
    }, []);

    const comCallback = useCallback(() => {
        // xxx
    }, []);

    const count2 = useMemo(() => {
        return count * 10;
    }, [count]);
    return (
        <div>
            <MemoCcom val={count2} callback={comCallback}></MemoCcom>
        </div>
    );
};
interface Cprops {
    val: number;
    callback: Function;
}
const Ccom = (porps: Cprops) => {
    console.log('Ccom  render');
    return (
        <div>
            <div>{porps.val}</div>
        </div>
    );
};

const MemoCcom = memo(Ccom);
const App: React.FC = () => {
    return (
        <div>
            <Acom></Acom>
        </div>
    );
};

export default App;
