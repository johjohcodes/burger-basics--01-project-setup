import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/layout/Layout'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    </>
  )
}

export default App
