import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Layout>
          <p>Test</p>
        </Layout>
      </div>
    </>
  )
}

export default App
