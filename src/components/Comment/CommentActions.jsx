import React from 'react'

const CommentActions = (props) => {
  return (
    <div className="comment-actions">
      
      <button className='x' onClick={() => props.handleDeleteComment(props.comment._id)}>delete comment</button> 
    </div>
  )
}

export default CommentActions