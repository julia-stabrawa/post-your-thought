import React from 'react';
import HeaderTitle from "../molecules/HeaderTitle";
import Btn from "../atoms/Btn";

type Props = {
    userId: string;
    id: string;
    title: string;
    body: string;
};

const Post: React.FC<Props> = ({userId, id, title, body}) => {
    return(
        <div className="post">
            <HeaderTitle/>
            <div className="single__post">
                <Btn directory={"/wall"} text={"Go Back"}/>
                <div className="post__details">
                    <h2>Details</h2>
                    <p><span>UserId: </span>{userId}</p>
                    <p><span>Id: </span>{id}</p>
                    <p><span>Title: </span>{title}</p>
                    <p><span>Body: </span>{body}</p>
                </div>
            </div>
        </div>
    );
}

export default Post;