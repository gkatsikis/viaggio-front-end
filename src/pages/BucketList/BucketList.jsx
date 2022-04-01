import styles from './BucketList.css'
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
    <div className='full-container'>
      <h4>Bucket List</h4>
      <ListItemForm handleCreateItem={handleCreateItem} />
      <h6>Your Bucket List Items Here:</h6>
      <div>
        {listItems.map (listItem =>
          <ListItem key={listItem._id} listItem={listItem}/>
          )}
      </div>
    </div>
  );
}

export default BucketList;