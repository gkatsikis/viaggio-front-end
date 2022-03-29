import React, { useState, useEffect } from 'react';
import CreateBucketListForm from '../../components/CreateBucketListForm/CreateBucketListForm';
import ListItem from "../../components/ListItem/ListItem";

const BucketList = () => {
  const [bucketlists, setBucketList] = useState([])



  return (  
    <>
      <h1>Bucket List</h1>
      <CreateBucketListForm />
      <ListItem />
    </>
  );
}

export default BucketList;