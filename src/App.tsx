// TS类型

import {useMemo} from "react";


function App() {
    // useMemo 是一个React hook 它在每次重新渲染的时候能够缓存计算的结果;
    // filterTodos 的返回值推断 visibleTodos 的类型;
    const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab])
    return (
        <>

        </>
    )
}


export default App