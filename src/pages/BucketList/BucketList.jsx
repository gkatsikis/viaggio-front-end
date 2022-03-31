import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListItemForm from '../../components/ListItemForm/ListItemForm';
import ListItem from "../../components/ListItem/ListItem";
import * as listItemService from '../../services/listItemService'

const BucketList = () => {
  const [listItems, setListItems] = useState([])
  const navigate = useNavigate()

const handleCreateItem = async(data) => {
  const newListItem = await listItemService.create(data)
  setListItems([...listItems, newListItem])
  navigate('/createBucketList') 
}

useEffect(() => {
  listItemService.getAll()
  .then(allListItems => {
    setListItems(allListItems)
  }) 
}, [])

  return (  
    <>
      <h1>Bucket List</h1>
      <ListItemForm handleCreateItem={handleCreateItem} />
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