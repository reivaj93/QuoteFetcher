import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuoteFetcher from './Components/Quote'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <QuoteFetcher/>
    </>
  )
}

export default App
