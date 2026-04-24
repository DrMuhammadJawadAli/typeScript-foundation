import './App.css'
import ChaiCard from './components/ChaiCard'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <div>
        <h1>
          This app is created with react + Typescript.
        </h1>
        <ChaiCard name="Headphones" price={123}/>
        <ChaiCard name="Iphones" price={80000}/>
        </div>
        <div>
          <Counter />
        </div>
    </>
  )
}

export default App
