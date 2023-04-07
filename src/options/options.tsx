import React from 'react'
import {createRoot} from 'react-dom/client'
import './options.css'


const tests = (
    <div>
        <h1>Hello world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusamus deserunt praesentium suscipit esse, doloribus quae ipsam iusto mollitia sed!</p>
    </div>
)


const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(tests)