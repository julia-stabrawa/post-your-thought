import React from 'react';
import {users} from "../../randomNames";

type Props = {
    userId: number;
    title: string;
};

const SingleCard: React.FC<Props> = ({userId,  title}) => {
    return (
        <div className="card__details">
            <h2><span>UserId: </span>{users[userId - 1]}</h2>
            <h3><span>Title: </span>{title}</h3>
        </div>
    );
}

export default SingleCard;