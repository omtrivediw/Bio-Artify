import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-[#0F0A30] from-200% to-[#08041a] to-40%'>
        <NavBar />
      </div>

    </>
  )
}

export default App
