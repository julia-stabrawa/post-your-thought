import React from 'react';
import {Link} from "react-router-dom";
import {users} from "../../randomNames";

type Props = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const SingleCard: React.FC<Props> = ({userId, title, id, body}) => {

    const postInfo: object = {
        user: `${users[userId - 1]}`,
        title: `${title}`,
        id: `${id}`,
        body: `${body}`
    }

    const infoSave = () => {
        localStorage.setItem("post", JSON.stringify(postInfo));
    }

    return (
        <Link to={`/${id}`} className="card__details" onClick={infoSave}>
            <h2><span>User: </span>{users[userId - 1]}</h2>
            <h3><span>Title: </span>{title}</h3>
        </Link>
    );
}

export default SingleCard;