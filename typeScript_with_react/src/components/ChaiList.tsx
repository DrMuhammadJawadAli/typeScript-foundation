import type { Chai } from "../Types"
import ChaiCard from "./ChaiCard"

interface chaiListProps{
  item: Chai[] // this is the imported interface.
}

export function ChaiList({item}: chaiListProps) {
  return (
    <div>
      {item.map((chai)=>(
        <ChaiCard 
        key={chai.id}
        name={chai.name}
        price={chai.price}
        isSpecial = {chai.price > 30}
        
        />
      ))}
    </div>
  )
}

export default ChaiList
