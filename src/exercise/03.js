// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
// 🐨 create a CountProvider component here that does this:
//   🐨 get the count state and setCount updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider

const CountProvider = React.createContext()

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const {count} = React.useContext(CountProvider)
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const {setCount} = React.useContext(CountProvider)
  const increment = () => setCount(prev => prev + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  const [count, setCount] = React.useState(0)
  return (
    <CountProvider.Provider value={{count, setCount}}>
      <CountDisplay />
      <Counter />
    </CountProvider.Provider>
  )
}

export default App
