import StarshipCard from "./StarshipCard"

const StarshipList = ({starShips}) => {
  console.log(starShips);
  
  return(
    <>{starShips && starShips.length>0?(starShips.map((item)=>(
    <div>
     <h3>name: {item.name}</h3>
     <p>Class: {item.starship_class}</p>
     <p>Manufacturer: {item.manufacturer}</p>
     <p>Model: {item.model}</p>
    </div>))
    )
    :(<h1>Data not arrrived</h1>)}</>
    )
}

export default StarshipList

