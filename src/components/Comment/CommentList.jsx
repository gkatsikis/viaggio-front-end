import React from "react";
import CommentCard from "./CommentCard";

const CommentList = (props) => {
  return (
    props.comments?.map((comment) => (
      <CommentCard 
        {...props}
        key={comment._id}
        comment={comment}
      />

    ))
  )
}

export default CommentList