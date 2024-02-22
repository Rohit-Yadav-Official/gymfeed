import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import WorkoutForm from './components/WorkoutForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1> Workout buddy</h1>
      
      <WorkoutForm />
      <Home />
    </div>
  )
}

export default App
