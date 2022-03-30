import React from 'react'
import CommentActions from './CommentActions'

const CommentCard = (props) => {
  console.log(props)
  return (
    <div className='comment-card'>
      <CommentActions {...props} />
      {props.comment.content} 
    </div>
    
  )
}

export default CommentCard