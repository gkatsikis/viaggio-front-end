import { useState, useEffect } from 'react';



const DestinationForm = (props) => {
  const [formData, setFormData] = useState({
    destName: '',
    location: '',
    category: '',
  })

  

  return ( 
    <>
      <p>hey there form goes here</p>
      <form 
      autoComplete='off'
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
          required
          />
         </div>
         <div> How would you categorize this destination?
          <label 
          htmlFor="dest-input"
          className="dest-input">
          </label>
          <select name="category">
            <option value="beach">Beach</option>
            <option value="park">Park or Trail</option>
            <option value="art">Art Venue</option>
          </select>
         </div>
      </form>
    </>
   );
}
 
export default DestinationForm;