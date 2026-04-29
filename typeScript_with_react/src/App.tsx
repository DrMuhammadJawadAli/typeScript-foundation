import './App.css'
import ChaiCard from './components/ChaiCard'
import Counter from './components/Counter'
import ChaiList from './components/ChaiList'
import type { Chai } from './Types'

import { Card } from './components/Card'
import { OrderForm } from './components/orderForm'
const menu: Chai[] = [
  { id: 0, name: "Sada Chai", price: 70 },
  { id: 1, name: "Elachi Chai", price: 100 },
  { id: 2, name: "Gur Wali Chai", price: 150 },
  { id: 3, name: "Special Chai", price: 350 },
  { id: 4, name: "Irani Chai", price: 120 },

]




function App() {

  return (
    <>
      <div>
        <h1>
          This app is created with react + Typescript.
        </h1>
        <ChaiCard name="Headphones" price={123} />
        <ChaiCard name="Iphones" price={80000} />
      </div>
      <div>
        <Counter />
      </div>
      <br />
      <div>
        <h3>This is little example of the chaiList</h3>

        <ChaiList
          item={menu}

        />
      </div>

      <div>
        <p>Here is our order from ordering the chai</p>
        <OrderForm
          onSubmit={(Order) => {
            console.log("Placed", Order.name, Order.cups);
          }}
        />
      </div>
      <div>

        <Card 
        title = "this one is special card"
      footer = {<button>Footer button </button>} // the html elements are the react node.
        />
      </div>

    </>
  )
}

export default App
