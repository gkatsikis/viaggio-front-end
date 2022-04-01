import React from "react";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";
import styles from './CommentBox.css'
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

  const handleUpdateComment = async (commentId) => {
    try {
      const updatedPost = await postService.updateComment(props.post._id, commentId)
      const newComment = updatedPost.comments.find((comment) => comment._id === commentId)

      const updatedCommentArray = props.comments.map((comment) => (
        comment._id === commentId ? newComment : comment
      ))

      props.setPost(updatedPost)
      props.setComments(updatedCommentArray)
    } catch (error) {
      throw error
    }
  }

  const handleDeleteComment = async (commentId) => {
    try {
      await postService.deleteComment(props.post._id, commentId)
      props.setComments(props.comments.filter(comment => comment._id !== commentId))
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="all-com">
      <div><CreateComment {...props} handleCreateComment={handleCreateComment} /></div>
      <div className="comment-section">
        <CommentList {...props}
        handleUpdateComment={handleUpdateComment}
        handleDeleteComment={handleDeleteComment}
      />
      </div>
    </div>
  )
}

export default CommentSection