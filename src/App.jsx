import { useState } from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <Layout>
           <div className="center-burger">
        <img src="/assets/images/burgerLogo.png" alt="Burger" style={{width: '300px', height: 'auto'}} />
      </div>
          <BurgerBuilder/>
        </Layout>
      </div>
      
    </>
  )
}

export default App
