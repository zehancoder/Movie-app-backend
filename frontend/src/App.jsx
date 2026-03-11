import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './features/auth/Login'
import Routing from './routes/Route'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="bg-animation min-h-screen">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Routing />
    </div>

  )
}

export default App
