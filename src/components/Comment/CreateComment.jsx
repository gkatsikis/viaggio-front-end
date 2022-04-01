import styles from './CommentBox.css'
import React, { useState } from "react"

const CreateComment = (props) => {
  const [text, setText] = useState('')

  const formData = {
    content: text,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleCreateComment(formData)
    setText('')
  }

  return (
    <div id='commentbox'>
    <form 
    className="create-comment-form"
    onSubmit={handleSubmit}
    >
      <input
      className='comment'
        required
        autoComplete='off'
        placeholder="Comment"
        name="content"
        value={text}
        onChange={(e) => setText(e.target.value)}
      >
      </input>
      <button className="btn btn-success" id='comment-submit' type="submit">Submit</button>
    </form> 
    </div>
  )
}

export default CreateComment