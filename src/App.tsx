// 在jsx/tsx中使用大括号编写JavaScript
// import './public.css'

// const Card = () => {
//     return (
//         <>
//             <div className="card">
//                 <p className="heading">
//                     Popular this month
//                 </p>
//                 <p>
//                     Powered By
//                 </p>
//                 <p>
//                     Uiverse
//                 </p>
//             </div>
//         </>
//     )
// }
/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const Example = () => {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}


// const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//         backgroundColor: 'skyblue',
//         color: 'pink',
//         width: '500px',
//         borderRadius: '20px',
//         padding: '15px',
//     },
//     img: {
//         borderRadius: '50%',
//     }
// }
const App = () => {

    // const introduce = [
    //     {item: 'Improve the videophone', id: '1'},
    //     {item: 'Prepare aeronautics lectures', id: '2'},
    //     {item: 'Work on the alcohol-fuelled engine', id: '3'},
    // ]

    // const Items = introduce.map((item) =>
    //     <li id={item.id}>
    //         {item.item}
    //     </li>
    // )
    return (
        <>
            {/*<div style={person.theme}>*/}
            {/*    <h1>{person.name}'s Todos</h1>*/}

            {/*    <img*/}
            {/*        style={person.img}*/}
            {/*        src="https://i.imgur.com/7vQD0fPs.jpg"*/}
            {/*        alt="Gregorio Y. Zara"*/}
            {/*    />*/}

            {/*    <ul>*/}
            {/*        {Items}*/}
            {/*    </ul>*/}
            {/*</div>*/}

            {/*<Card></Card>*/}
            <Example></Example>
        </>
    )
}

export default App;