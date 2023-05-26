import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// React Dom library allows us to interact with document object model   
ReactDOM.render(
    // this is something like addtional check and warnings, there will be on difference in output    
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)