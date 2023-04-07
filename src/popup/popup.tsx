import React, {useState} from 'react'
import {createRoot} from 'react-dom/client'
import './popup.css'

// const tests = (
//     <div>
//         <h1>Hello world</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusamus deserunt praesentium suscipit esse, doloribus quae ipsam iusto mollitia sed!</p>
//     </div>
// )


const Test = ()=>{
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Hello ${count}</h1>
            <button onClick={()=>setCount(count+1)}>click</button>
            <img src="brain.jpg" alt="" width="400px"/>

        </div>
    )
}

export {Test}


const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<Test/>)