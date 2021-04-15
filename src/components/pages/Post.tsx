import React, {useEffect, useState} from 'react';
import HeaderTitle from "../molecules/HeaderTitle";
import Btn from "../atoms/Btn";

type PostObject = {
    id: string;
    user: string;
    title: string;
    body: string;
}

const Post = (info: PostObject) => {
    const [post, setPost] = useState(info);

    useEffect(() => {
        const data = localStorage.getItem("post")
        if (data) {
            setPost(JSON.parse(data))
        }
    }, []);

    return (
        <div className="post">
            <HeaderTitle/>
            <div className="single__post">
                <Btn directory={"/"} text={"Go Back"}/>
                <div className="post__details">
                    <h2>Details</h2>
                    <p><span>UserId: </span>{post.user}</p>
                    <p><span>Id: </span>user{post.id}</p>
                    <p><span>Title: </span>{post.title}</p>
                    <p><span>Body: </span>{post.body}</p>
                </div>
            </div>
        </div>
    );
}

export default Post;
