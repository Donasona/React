import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



// App.jsx  >>>>  root component of the entire roject all other child components should be imported here
// main.jsx >>> main component act as a bridge in between html(DOM) by using the id "root" in index.html 
// and other component in react.