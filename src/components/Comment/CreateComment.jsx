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
      >
      </input>
    </form> 
  )
}

export default CreateComment