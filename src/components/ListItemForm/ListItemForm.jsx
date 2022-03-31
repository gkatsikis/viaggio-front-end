import React, { useState, useEffect, useRef } from 'react';
import { create } from '../../services/listItemService'

const ListItemForm = (props) => {
  const [formData, setFormData] = useState({
    location: '',
    season: '',
    todo: '',
    fulfilled: false,
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const [validForm, setValidForm] = useState(false)

  const formElement = useRef()

  const handleSubmit = evt => {
    evt.preventDefault()
    const listItemFormData = new FormData()
    listItemFormData.append('location', formData.location)
    listItemFormData.append('season', formData.season)
    listItemFormData.append('todo', formData.todo)
    listItemFormData.append('fulfilled', formData.fulfilled)
    props.handleCreateItem(listItemFormData)
    setFormData({
      location: '',
      season: '',
      todo: '',
      fulfilled: false,
    })
  }

  

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  return (  
    <>
    <h3>Add to Bucket List</h3>
    <form autoComplete="off"
    ref={formElement}
    onSubmit={handleSubmit}
    >
      <div> Location:
        <label htmlFor="item-input"
        className='item-label'>
        </label>
        <input type="text" 
        className='item-form'
        name="location"
        value={formData.location}
        required
        onChange={handleChange}
        />
      </div>

      <div> Season: 
        <label htmlFor="item-input"
        className="item-label">
        </label>
        <input type="text" 
        className='item-form'
        name="season"
        value={formData.season}
        required
        onChange={handleChange}
        />
      </div>

      <div> To Do: 
        <label htmlFor="item-input"
        className="item-label">
        </label>
        <input type="text" 
        className='item-form'
        name="todo"
        value={formData.todo}
        required
        onChange={handleChange}
        />
      </div>

      <div> Done: 
        <label htmlFor="item-input"
        className="item-label">
        </label>
        <input type="checkbox" 
        className='item-form'
        name="fulfilled"
        value={formData.fulfilled}
        onChange={handleChange}
        />
      </div>

      <button
      type="submit"
      className="btn"
      disabled={!validForm}
      >
      Add Bucket List Item
      </button>
    </form>
    <hr />
    </>
  );
}

export default ListItemForm;