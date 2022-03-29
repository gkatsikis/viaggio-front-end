import React from 'react'
import CommentActions from './CommentsActions'

const CommentCard = (props) => {
  return (
    <div className='comment-card'>
      <CommentActions {...props} />
    </div>
    
  )
}

export default CommentCard