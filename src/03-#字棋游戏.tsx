// react 组件是返回标签的 JavaScript 函数
// react 组件必须以大写开头 而HTML标签则必须以小写开头
import "./public.css";
import React, { useState } from "react";
// React 程序是由"组件"组成的。一个组件是UI(用户界面)的一部分, 它拥有自己的逻辑和外观。
// 组件可以小到一个按钮,也可以大到整个页面
interface MySquare {
  value: string | null;
  onSquareClick: () => void;
}

const Square: React.FC<MySquare> = ({ value, onSquareClick }) => {
  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {" "}
        {value}{" "}
      </button>
    </>
  );
};

interface MyBoard {
  xIsNext: boolean;
  squares: string[];
  onPlay: (e: string[]) => void;
}

const Board: React.FC<MyBoard> = ({ xIsNext, squares, onPlay }) => {
  // 状态提升
  // 在父组件中声明共享state, 父组件可以通过props将state传回子组件, 使数据同步
  // Array(9).fill("") 创建了一个包含9个元素的数组, 并将每个元素设置为"",
  // ["","","x","x","x","o","o","o",""]
  // state 对于定义它的组件是私有的 因此不能直接Square更新Board
  // squares 值为 ['', '', '', '', '', '', '', '', '']
  // const [squares, setSquares] = useState(Array(9).fill(""));
  // 交替落子
  // 记录x是否已经落子 默认为true 开始为x 落子
  //  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "x" : "o");
  }

  // 最后在 Board 组件内定义 handleClick 函数来更新并保存棋盘 state 的 squares 数组
  function handleClick(i: number) {
    // 这里判断 棋盘上是否已经落子 不允许在 同一个地方重复落子
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    // React 不变性
    // 1.不变性使复杂的功能更容易实现
    // 2.默认情况下,当父组件的state发生变化时,所有子组件都会自动重新渲染, 这甚至包括未受变化影响的子组件
    //   不变性使得组件比较其数据是否已更改的成本非常低
    const nextSquares = squares.slice();
    // 判断
    if (xIsNext) {
      nextSquares[i] = "x";
    } else {
      nextSquares[i] = "o";
    }
    onPlay(nextSquares);
    // setSquares(nextSquares);
    // setXIsNext(!xIsNext)
  }

  // 宣布获胜者
  function calculateWinner(squares: string[]): string {
    const lines: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      // 结构循环出来的二维数组
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return "";
  }

  return (
    // 构建棋盘
    <>
      {/* 显示该谁落子 */}
      <div className={"status"}> {status} </div>
      <div className={"board-row"}>
        {/*向下传递*/}
        {/*handleClick(0) 的话 导致无限循环 不能直接调用*/}
        {/*{ () => handleClick(0) } 这样将会是传递一个函数 而不是直接调用 这将解决无限循环的问题 */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className={"board-row"}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className={"board-row"}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

// 再一次'状态提升'
const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill("")]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares: string[]) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className={"game"}>
      <div className={"game-board"}>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        ></Board>
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
};

export default Game;
