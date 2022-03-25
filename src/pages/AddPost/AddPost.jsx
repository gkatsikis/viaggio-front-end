import { useState, useEffect, useRef } from 'react';
import { create } from '../../services/posts';



const AddPost = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    story: '',
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  
  const [validForm, setValidForm] = useState(false)

  const formElement = useRef()
  
  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddPost(formData)
    // create(formData)
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  return (
    <>
    <h1>Add Post</h1>
    <form autoComplete="off"
    ref={formElement}
    onSubmit={handleSubmit}
    >
    <div> Title:
      <label 
      htmlFor="post-input"
      className="post-label">

      </label>
      <input 
      type="text"
      className="post-form"
      name="title"
      value={formData.title}
      required
      onChange={handleChange}
       />
    </div>
    <div> Story:
      <label 
      htmlFor="post-input"
      className="post-label">
      </label>
      <textarea 
      type="text"
      className="post-form"
      name="story"
      value={formData.story}
      required
      onChange={handleChange}
       />
    </div>
    {/* <div>
      <label 
      htmlFor="post-input"
      className="post-label">
        Upload Photo
      </label>
      <input 
      type="file"
      className="post-form"
      name="photo"
      onChange={handleChange}
       />
    </div> */}
    <button 
    type="submit"
    className="btn"
    disabled={!validForm}
    >
      Add Your Story</button>
    </form>
    </> 
   );
}
 
export default AddPost;