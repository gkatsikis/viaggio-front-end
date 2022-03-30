import React from 'react'

const CommentActions = (props) => {
  return (
    <div className="comment-actions">
      <button>edit</button>
      <button onClick={() => props.handleDeleteComment(props.comment._id)}>delete</button> 
    </div>
  )
}

export default CommentActions