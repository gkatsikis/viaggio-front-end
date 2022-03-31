import { useState, useEffect } from 'react';
import DestinationForm from '../../components/DestinationForm/DestinationForm';
import DestintaionList from '../../components/DestinationList/DestinationList';
import * as destService from '../../services/destService'



const Destination = (props) => {
const [locations, setLocations] = useState([])

useEffect(() => {
  destService.getAll()
  .then(dests => {
    setLocations(dests)
  })
}, [])

  return ( 
    <>
      <h1>Where have you always wanted to go?</h1>
      <DestinationForm handleAddDestination={props.handleAddDestination}/>
      <hr />
      <DestintaionList key={locations._id} />
    </>
   );
}
 
export default Destination;