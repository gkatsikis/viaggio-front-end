import { useState, useEffect } from 'react';
import DestinationForm from '../../components/DestinationForm/DestinationForm';
import DestintaionList from '../../components/DestinationList/DestinationList';



const Destination = (props) => {


  return ( 
    <>
      <h1>Where have you always wanted to go?</h1>
      <DestinationForm />
      <hr />
      <DestintaionList />
    </>
   );
}
 
export default Destination;