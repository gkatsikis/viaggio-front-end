import { useState, useEffect, useRef } from 'react';



const DestinationForm = (props) => {
  const [formData, setFormData] = useState({
    destName: '',
    location: '',
    category: '',
  })

  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    const postFormData = new FormData()
    postFormData.append('destName', formData.destName)
    postFormData.append('location', formData.location)
    postFormData.append('category', formData.category)
    props.handleAddDestination(postFormData)
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  return ( 
    <>
      <p>hey there form goes here</p>
      <form 
      autoComplete='off'
      ref={formElement}
      onSubmit={handleSubmit}
      >
        <div> Where do you want to go?
          <label 
          htmlFor="dest-input"
          className="dest-input">
          </label>
          <input 
          type="text"
          className="dest-form"
          name="destName"
          value={formData.destName}
          onChange={handleChange}
          required
          />
         </div>
         <div> Where is your destination located?
          <label 
          htmlFor="dest-input"
          className="dest-input">
          </label>
          <input 
          type="text"
          className="dest-form"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          />
         </div>
         <div> How would you categorize this destination?
          <label 
          htmlFor="dest-input"
          className="dest-input">
          </label>
          <select 
          name="category" 
          value={formData.category} 
          onChange={handleChange}>
            <option value="beach">Beach</option>
            <option value="park">Park or Trail</option>
            <option value="art">Art Venue</option>
          </select>
         </div>
         <button
         type="submit"
         className="btn">Add a Destination</button>
      </form>
    </>
   );
}
 
export default DestinationForm;