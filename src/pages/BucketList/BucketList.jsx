import React, { useState, useEffect } from 'react';
import CreateBucketListForm from '../../components/CreateBucketListForm/CreateBucketListForm';
import ListItem from "../../components/ListItem/ListItem";
import * as bucketlistService from '../../services/bucketlistService'

const BucketList = () => {
  const [listItems, setListItems] = useState([])

const handleCreateItem = async(data) => {
  console.log('NEW LIST ITEM DATA:', data)
  const newListItem = await bucketlistService.create(data)
  console.log(newListItem)
  setListItems([...listItems, newListItem])
}

  return (  
    <>
      <h1>Bucket List</h1>
      <CreateBucketListForm handleCreateItem={handleCreateItem}/>
      <ListItem />
    </>
  );
}

export default BucketList;