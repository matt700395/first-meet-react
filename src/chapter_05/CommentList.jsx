import React from "react";
import Comment from "./Comment";

function CommentList(props){
    return (
        <div>
            <Comment name={"이인제"} comment={"안녕하세요, 소플입니다."}/>
            <Comment name={"유재석"} comment={"리액트 재미있습니다!"}/>
        </div>
    )
}

export default CommentList;