import React, { useState, useEffect } from 'react';
import ListItem from "../../components/ListItem/ListItem";

const BucketList = () => {
  const [bucketlists, setBucketList] = useState([])



  return (  
    <>
      <h1>Bucket List</h1>
      <ListItem />
    </>
  );
}

export default BucketList;