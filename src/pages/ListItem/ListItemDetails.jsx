import styles from './listItem.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as listItemService from '../../services/listItemService'
import ListItem from '../../components/ListItem/ListItem'

const ListItemDetails = (props) => {
  const [listItem, setListItem] = useState([])
  const { id } = useParams()
  

  useEffect(() => {
    const fetchListItem = async () => {
      try {
        const listItemData = await listItemService.getListItemById(id)
        setListItem(listItemData)
      } catch (error) {
        throw error
      }
    }
    fetchListItem()
  }, [id])

  return (  
    <div className="container">
      <div className='title'>Here are your list item details</div>
      <div>
        <p>Location: {listItem.location}</p>
        <p>Season: {listItem.season}</p>
        <p>To Do: {listItem.todo}</p>
        <p>Done: {listItem.fulfilled === true ? 'Done' : 'Not Done'}</p>
      </div>
      <a href="/createBucketList"> Go Back To Bucket List</a>
      <button className='btn'
        onClick={() => props.handleDeleteListItem(listItem._id)}
      >
        Delete List Item
      </button>
    </div>
  );
}

export default ListItemDetails;