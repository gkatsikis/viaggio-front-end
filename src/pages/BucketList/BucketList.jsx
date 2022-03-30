import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateBucketListForm from '../../components/CreateBucketListForm/CreateBucketListForm';
import ListItem from "../../components/ListItem/ListItem";
import * as bucketlistService from '../../services/bucketlistService'

const BucketList = () => {
  const [listItems, setListItems] = useState([])
  const navigate = useNavigate()

const handleCreateItem = async(data) => {
  console.log('NEW LIST ITEM DATA:', data)
  const newListItem = await bucketlistService.create(data)
  console.log(newListItem)
  setListItems([...listItems, newListItem])
  navigate('/createBucketList') //need to make this a blank form after submitting
}

  return (  
    <>
      <h1>Bucket List</h1>
      <CreateBucketListForm handleCreateItem={handleCreateItem}/>
      <h3>Your Bucket List Items Here:</h3>
      <div>
        {listItems.map (listItem =>
          <ListItem key={listItem._id} listItem={listItem}/>
          )}
      </div>
    </>
  );
}

export default BucketList;