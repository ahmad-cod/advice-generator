import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [advice, setAdvice] = useState({})
  const [newAdvice, setNewAdvice] = useState(false)

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => setAdvice(data.slip))
  }, [newAdvice])

  const getRandomAdvice = () => setNewAdvice(prevState => !prevState)

  const {advice:message, id} = advice
  return (
    <div className="App py-4 flex justify-center relative">
       <div className="card block p-8 px-10 max-w-sm lg:max-w-md rounded-lg shadow-md">
        <header role='banner'>
          <h1 className='title mb-4 text-sm font-bold'>Advice #{id}</h1>
        </header>
        <main>
          <div className='font-normal text-white text-2xl mb-6'><q>
              {!advice ? 'Advice is almost here...' : message}
            </q>
          </div>
          <div className="dividers flex justify-center mb-4">
            <div className="pattern-divider "></div>
            <div className="pattern-divider"></div>
          </div>
          <div className='dice-icon flex justify-center absolute bottom-0' onClick={getRandomAdvice}>
            <img src="./assets/images/icon-dice.svg" alt="dice" />
          </div>
        </main>
       </div>
    </div>
  )
}

export default App
