// 在jsx/tsx中使用大括号编写(读取)JavaScript

// 导入
import ProfileCom from './components/Profile.tsx';
import {getImageUrl} from './components/utils.tsx';
import type {GetImageUrlTpye} from './components/utils.tsx';

// 组件
// 将props传递给一个组件
const Card = ({children}) => {
    return (
        <>
            <div className="card">
                {children}
            </div>
        </>
    )
}

const Avatar = ({person, size}:GetImageUrlTpye) => {
    return (
        <>
            <img
                className={'avatar'}
                src={getImageUrl(person)}
                alt={person.name}
                width={size}
                height={size}
            />
        </>
    )
}
const Profile = () => {
    return (
        <>
            <img src="https://i.imgur.com/MK3eW3As.jpg"
                 alt="Katherine Johnson"/>

            <Card>
                <Avatar size={100} person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}>
                </Avatar>
            </Card>
        </>
    )
}

// 使用 jsx编写标签 & 在jsx中使用大括号编写JavaScript


function TodoList() {
    const person = {
        name: 'Gregorio Y. Zara',
        theme: {
            backgroundColor: 'skyblue',
            color: 'pink'
        }
    };
    const list = [
        {id: 1, title: 'Invent new traffic lights'},
        {id: 2, title: 'Rehearse a movie scene'},
        {id: 3, title: 'Improve spectrum technology'}
    ]
    const Itemsli = list.map((item) => {
            return (
                <li key={item.id}>
                    {item.title}
                </li>
            )
        }
    )
    return (
        <>
            <h1>{person.name}</h1>
            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="photo"
            />
            <ul>
                {Itemsli}
            </ul>
        </>
    );
}

function App() {
    return (
        <>
            <section>
                <h1>
                    Amazing scientists
                </h1>
                <Profile></Profile>
                <Profile></Profile>
                <Profile></Profile>
                <ProfileCom></ProfileCom>
                <TodoList></TodoList>
            </section>
        </>
    )
}

export default App