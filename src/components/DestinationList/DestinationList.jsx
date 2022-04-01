import { useState, useEffect } from 'react';
import * as destService from '../../services/destService'
import './DestinationList.css'

const DestinationList = (props) => {
  const [locations, setLocations] = useState([])
  
  useEffect(() => {
    destService.getAll()
    .then(allDests => {
      setLocations(allDests)
    })
  }, [])

  return ( 
    <div> 
      <h2>Explore Destinations</h2>
      {locations.map((locationx) => 
        <div className="dest-list">
          <h3>{locationx.destName}</h3>
          <h4>{locationx.location}</h4>
          <h5>{locationx.category}</h5>
        </div>
      )}
    </div>
   );
}
 
export default DestinationList;