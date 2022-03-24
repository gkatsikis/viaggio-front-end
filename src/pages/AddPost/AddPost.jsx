import { useState } from 'react';


const AddPost = (props) => {
  


  return (
    <>
    <h1>Add Post</h1>
    <div> Title:
      <label 
      htmlFor="post-input"
      className="post-label">

      </label>
      <input 
      type="text"
      className="post-form"
      name="title"
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
       />
    </div>
    <div>
      <label 
      htmlFor="post-input"
      className="post-label">

      </label>
      <input 
      type="file"
      className="post-form"
      name="picture"
       />
    </div>
    </> 
   );
}
 
export default AddPost;