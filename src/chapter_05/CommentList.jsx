import React from "react";
import Comment from "./Comment";
const comments = [
    {
        name: "이인제",
        comment : "안녕하세요, 소플입니다",
    },
    {
        name: "유재석",
        comment : "리액트 재미있습니다",
    },
    {
        name: "강민경",
        comment : "저도 리액트 가르쳐주세요!",
    },
]


function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                )
            })}
        </div>
    )
}

export default CommentList;