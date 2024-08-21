import * as React from 'react';
import { createConnection } from './utils/Chat.ts';
export interface VideoPlayerType {
    url: string;
    isPlaying: boolean;
}
type T = null | any;
const VideoPlayer = ({ url, isPlaying }: VideoPlayerType) => {
    const ref = React.useRef<T>(null);

    React.useEffect(() => {
        if (isPlaying) {
            ref.current.play(); // 渲染期间不能调用 `play()`。
        } else {
            ref.current.pause(); // 同样，调用 `pause()` 也不行。
        }
    });
    return (
        <>
            <video ref={ref} src={url} loop playsInline></video>
        </>
    );
};

interface RoomIdType {
    roomId: string;
}

const ChatRoom = ({ roomId }: RoomIdType) => {
    const [serverUrl, setServerUrl] = React.useState('https://localhost:1234');

    React.useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();

        return () => {
            connection.disconnect();
        };
    }, [roomId, serverUrl]);

    return <></>;
};

const App = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    // 每当组件渲染时 React 将更新屏幕, 然后运行 useEffect 中的代码
    // 换句话说, useEffect 会把这段代码放到屏幕更新渲染之后执行
    React.useEffect(() => {
        // 每次渲染后都会执行此处的代码
    });

    // useEffect(setup, dependencies?)

    // setup: 处理 Effect 函数。 setup 函数选择性返回一个 清理(cleanup) 函数。 当组件被添加到 DOM 的时候
    // React 将运行 setup 函数。 在每次依赖想变更重新渲染后, React 将首先使用就值运行 cleanup 函数 (如果提供了该函数),
    // 然后使用新运行 setup 函数, 在组件从 DOM 中移除后, React 将最后一次运行 cleanup 函数

    // React.useEffect(() => { // 每次渲染后都会执行此处的代码  })

    // React.useEffect(() => { // 这里的代码只会在组件挂载后执行 }, []); // 组件是用来生成和管理 DOM 的逻辑单元。

    // React.useEffect(() => { // 这里的代码只会在每次渲染后，并且 a 或 b 的值与上次渲染不一致时执行  }, [a, b]);

    // 如何编写 Effect
    //  1. 声明 Effect
    //  2. 指定 Effect 依赖
    //  3. 必要时添加清理 (cleanup) 函数
    return (
        <>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? '暂停' : '播放'}
            </button>
            <VideoPlayer
                isPlaying={isPlaying}
                url="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
            ;
        </>
    );
};

export default App;
