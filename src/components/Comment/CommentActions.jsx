import React from 'react'

const CommentActions = (props) => {
  return (
    <div className="comment-actions">
      
      <button onClick={() => props.handleDeleteComment(props.comment._id)}>x</button> 
    </div>
  )
}

export default CommentActions