// 在jsx/tsx中使用大括号编写(读取)JavaScript

// 导入
import ProfileCom from './components/Profile.tsx';
import {EditOutlined, EyeInvisibleOutlined, EyeTwoTone,CheckCircleOutlined} from "@ant-design/icons";
import {useState} from 'react';
import {Input,} from 'antd';
// 组件


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

    const [password, setPassword] = useState('********');
    const [isShow, setIsShow] = useState(false);
    const setPwdFunc = () => {
        setIsShow(!isShow)
    }
    const savePwdFunc = () => {
        setIsShow(!isShow)
    }
    return (
        <>
            <section>
                <h1>
                    Amazing scientists
                </h1>

                <ProfileCom></ProfileCom>
                <TodoList></TodoList>

                <br/>

                <div>
                    <span>
                        密码:
                        {
                            isShow ? (<Input.Password
                                placeholder="input password"
                                style={{width: 200}}
                                iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />) : (<span>  {password.replace(password,'******')}  </span>)
                        }
                        {
                            isShow ? ( <CheckCircleOutlined style={{cursor: "pointer"}} onClick={savePwdFunc}/>) : (<EditOutlined style={{cursor: "pointer"}} onClick={setPwdFunc}/>)
                        }

                    </span>

                </div>
            </section>
        </>
    )
}

export default App