import React, {useEffect, useState} from 'react';
import HeaderTitle from "../molecules/HeaderTitle";
import {fetchPosts} from "../../API";
import Btn from "../atoms/Btn";
import SingleCard from "../organisms/SingleCard";

type PostObject = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

function Wall() {
    const [fetchedPosts, setFetchedPosts] = useState<PostObject[]>([]);
    const [posts, setPosts] = useState<PostObject[]>([]);

    const fetchPosts = async () => {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        const data = await (await fetch(url)).json();
        setFetchedPosts(data);
    }

    console.log(fetchedPosts);

    useEffect(() => {
        fetchPosts();
        const interval = setInterval(fetchedPosts.reverse, 1000);
    }, [fetchedPosts.length]);

    return (
        <div className="wall">
            <HeaderTitle/>
            <div className="wall__actions">
                <Btn directory={"/log"} text={"Log out"}/>
                <input
                    className="form__control"
                    placeholder="search"
                />
            </div>
            <div className="wall__content">
                {fetchedPosts.reverse().map(el =>
                    <SingleCard
                        userId={el.userId}
                        title={el.title}
                    />)
                }
            </div>
        </div>
    );
}

export default Wall;