import { userState, useState } from 'react'

const StarshipSearch = ({ fetchData }) => {
  //! State
  const [starShip, setStarships] = useState('');

  //! Event Handlers
  const handleSubmit = async (e) => {
    //prevent form submitting
    e.preventDefault();

    //fetch data
    await fetchData(StarshipSearch)

    //clear out the search input
    setStarships('')
  }
  
  return (
  <>
    <h2>Search</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="Search" >Search Term</label>
      <input
        id=""
        type="text"
        value={starShip}
        onChange={(e) => setQuery(e.target.value)}
      /> 
      <button type="submit">Search</button>
    </form>
  </>
 )
}

export default StarshipSearch