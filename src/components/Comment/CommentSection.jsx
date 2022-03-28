import React from "react";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";
import * as postService from '../../services/postService'

const CommentSection = (props) => {
  const handleCreateComment = async (formData) => {
    try {
      const newComment = await postService.createComment(props.post._id, formData)
      props.setComments([...props.comments, newComment])
    } catch (error) {
      throw error
    }
  }
  
  return (
    <div className="comment-section">
      <CreateComment {...props} handleCreateComment={handleCreateComment} />
      <CommentList {...props}
      />
    </div>
  )
}

export default CommentSection