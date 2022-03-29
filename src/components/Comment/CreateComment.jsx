import React, { useState } from "react"

const CreateComment = (props) => {
  const [text, setText] = useState('')

  const formData = {
    comment_text: text,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleCreateComment(formData)
    setText('')
  }

  return (
    <form 
    className="create-comment-form"
    onSubmit={handleSubmit}
    >
      <input
        required
        autoComplete='off'
        placeholder="Comment"
        name="comment_text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      >
      </input>
      <button type="submit">Submit</button>
    </form> 
  )
}

export default CreateComment