import React, {useEffect, useState} from 'react';
import HeaderTitle from "../molecules/HeaderTitle";
import SingleCard from "../organisms/SingleCard";
import Error from "../organisms/Error";

type PostObject = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

type Props = {
    logFunc: Function;
}

const Wall: React.FC<Props> = ({logFunc}) => {
    const [posts, setPosts] = useState<PostObject[]>([]);
    const [search, setSearch] = useState<string>("");
    const [fetchStatus, setFetchStatus] = useState<string>("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const loggingOut = () => {
        logFunc(false);
        sessionStorage.clear();
    }

    useEffect(() => {
        const err = new AbortController();
        const signal = err.signal;
        let interval: NodeJS.Timeout;

        const fetchPosts = async () => {
            const url = `https://jsonplaceholder.typicode.com/posts/`;
            const resp = await fetch(url, {signal: signal});
            const data = resp.json();

            if (!resp.ok) {
                setFetchStatus(`Something went wrong. Error ${resp.status}`);
            } else {
                setFetchStatus("");
            }

            return data;
        }

        fetchPosts().then((data) => {
            if (data.length) {
                const order = data.sort((a: any, b: any) => b.id - a.id);
                let count: number = 0;
                interval = setInterval(() => {
                    if (count < order.length) {
                        setPosts(order.slice(0, count));
                        count++;
                    } else {
                        clearInterval(interval);
                    }
                }, 1000);
            }
        });

        return () => {
            err.abort();
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="wall">
            <HeaderTitle/>
            <div className="wall__actions">
                <button
                    className="btn"
                    onClick={loggingOut}
                >
                    Log out
                </button>
                <input
                    className="form__control"
                    type="text"
                    placeholder="search"
                    onChange={handleSearch}
                />
            </div>
            {fetchStatus ? <Error error={fetchStatus}/> : (
                <>
                    <div className="wall__content">
                        {posts.filter(({body, title}) => {
                            return (
                                String(body).includes(search.trim()) ||
                                String(title).includes(search.trim())
                            );
                        })
                            .map(({id, userId, title, body}) =>
                                <SingleCard
                                    body={body}
                                    id={id}
                                    userId={userId}
                                    title={title}
                                />
                            )}
                    </div>
                </>)}
        </div>
    );
}

export default Wall;