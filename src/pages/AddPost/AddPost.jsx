import { useState } from 'react';


const AddPost = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    story: '',
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  
  const [validForm, setValidForm] = useState(false)

<<<<<<< HEAD

=======
>>>>>>> 567089ee6f92cb16b8dc228452af94290f1b9100
  return (
    <>
    <h1>Add Post</h1>
    <form action="">
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