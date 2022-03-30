import { Link } from 'react-router-dom'

const ListItem = ({listItem}) => {
  console.log('This is the:', listItem)
  return ( 
    <>
    <div>
      <Link
      className='list-item'
      to={`/listItem/${listItem._id}`}
      >
      <div>
        <p>{listItem.location}</p>
      </div>
      </Link>
    </div>
    </>
  );
}

export default ListItem;