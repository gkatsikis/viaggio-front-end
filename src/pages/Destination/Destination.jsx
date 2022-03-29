import { useState, useEffect } from 'react';
import DestinationForm from '../../components/DestinationForm/DestinationForm';



const Destination = (props) => {


  return ( 
    <>
      <h1>Where have you always wanted to go?</h1>
      <DestinationForm />
    </>
   );
}
 
export default Destination;