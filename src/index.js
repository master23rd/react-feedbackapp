import React from 'react'
//import ReactDom from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

//direct component
//ReactDom.render(<h1>My App</h1>, document.getElementById('root'))

//seprate component
//ReactDom.render(<App />, document.getElementById('root'))

//createRoot
const root = createRoot(document.getElementById('root'))
root.render(<App />)

//strict mode
// ReactDom.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
