import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as bucketlistService from '../../services/listItemService'
import ListItem from '../../components/ListItem/ListItem'

const ListItemDetails = (props) => {

  return (  
    <h1>Here are your list details</h1>
  );
}

export default ListItemDetails;