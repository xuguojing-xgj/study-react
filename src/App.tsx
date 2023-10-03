// 在jsx/tsx中使用大括号编写JavaScript


const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'skyblue',
        color: 'pink',
        width: '500px',
        borderRadius: '20px',
        padding: '15px',
    },
    img: {
        borderRadius: '50%',
    }
}
const App = () => {

    const introduce = [
        {item: 'Improve the videophone', id: '1'},
        {item: 'Prepare aeronautics lectures', id: '2'},
        {item: 'Work on the alcohol-fuelled engine', id: '3'},
    ]

    const Items = introduce.map((item) =>
        <li id={item.id}>
            {item.item}
        </li>
    )
    return (
        <>
            <div style={person.theme}>
                <h1>{person.name}'s Todos</h1>

                <img
                    style={person.img}
                    src="https://i.imgur.com/7vQD0fPs.jpg"
                    alt="Gregorio Y. Zara"
                />

                <ul>
                    {Items}
                </ul>
            </div>


        </>
    )
}

export default App;