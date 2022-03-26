import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function EditPost(props) {
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.post)
  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()

  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
		evt.preventDefault()
    props.handleUpdatePost(formData)
	}

  const handleChangePhoto = (evt) => {
    setFormData({...formData, postPhoto: evt.target.files[0]})
  }

  return (
    <>
    <h1>Edit Post</h1>
    <form 
    autoComplete="off"
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
    <div>
      <label 
      htmlFor="post-input"
      className="post-label">
        Upload Photo
      </label>
      <input 
      type="file"
      className="post-form"
      
      name="postPhoto"
      onChange={handleChangePhoto}
       />
    </div>
    <button 
    type="submit"
    className="btn"
    disabled={!validForm}
    >
      Add Your Story</button>
      <div className="d-grid">
					<Link
						to="/"
						className="btn btn-danger btn-fluid"
					>
						Cancel
					</Link>
          </div>
    </form>
    </> 
   );
}

export default EditPost