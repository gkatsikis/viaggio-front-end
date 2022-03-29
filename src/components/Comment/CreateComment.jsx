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
    <form 
    className="create-comment-form"
    onSubmit={handleSubmit}
    >
      <input
        required
        autoComplete='off'
        placeholder="Comment"
        name="content"
        value={text}
        onChange={(e) => setText(e.target.value)}
      >
      </input>
      <button type="submit">Submit</button>
    </form> 
  )
}

export default CreateComment