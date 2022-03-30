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
      <h1>Here are your list details</h1>
      <div>
        <p>Location: {listItem.location}</p>
        <p>Season: {listItem.season}</p>
        <p>To Do: {listItem.todo}</p>
        <p>Done: {listItem.fulfilled}</p>
      </div>
    </div>
  );
}

export default ListItemDetails;