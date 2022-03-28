import react from "react";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";
import * as postService from '../../services/postService'

const CommentSection = (props) => {
  
  return (
    <div className="comment-section">
      <CreateComment {...props} />
      <CommentList {...props} />
    </div>
  )
}

export default CommentSection