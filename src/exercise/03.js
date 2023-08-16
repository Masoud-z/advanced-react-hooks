// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
// 🐨 create a CountProvider component here that does this:
//   🐨 get the count state and setCount updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider

const CountContext = React.createContext()

function CountProvider(props) {
  const [count, setCount] = React.useState(0)
  return <CountContext.Provider value={{count, setCount}} {...props} />
}

function useCount() {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error('useCount most be used within the CountProvider')
  }
  return context
}

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const {count} = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const {setCount} = useCount()
  const increment = () => setCount(prev => prev + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  )
}

export default App
