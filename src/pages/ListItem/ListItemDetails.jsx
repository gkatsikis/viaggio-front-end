import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as listItemService from '../../services/listItemService'
import ListItem from '../../components/ListItem/ListItem'

const ListItemDetails = (props) => {
  const [listItem, setListItem] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()

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
    <div>
      <h3>Here are your list item details:</h3>
      <div>
        <p>Location: {listItem.location}</p>
        <p>Season: {listItem.season}</p>
        <p>To Do: {listItem.todo}</p>
        <p>Done: {listItem.fulfilled === true ? 'Done' : 'Not Done'}</p>
      </div>
      <a href="/createBucketList"> Go Back To Bucket List</a>
      <button
        onClick={() => props.handleDeleteListItem(listItem._id)}
      >
        Delete List Item
      </button>
    </div>
  );
}

export default ListItemDetails;