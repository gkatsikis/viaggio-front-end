import React from "react";
import CommentCard from "./CommentCard";

const CommentList = (props) => {
  return (
    
    props.comments?.map((comment) => (
      <div id="comment-card"><CommentCard
        {...props}
        key={comment._id}
        comment={comment}
      /></div>


    ))

  );
}

export default CommentList

