import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LogIn from "./components/pages/LogIn";
import Wall from "./components/pages/Wall";
import Post from "./components/pages/Post";
import Error from "./components/organisms/Error";

function App() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    const logInFunc = (result: boolean) => {
        setLoggedIn(result);
    }

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            setLoggedIn(true);
        }
    }, []);

    return (
        <Router>
            <Switch>
                <Route path="/:id">
                    <Post title={""} body={""} id={""} user={""}/>
                </Route>
                <Route path="/">
                    {!loggedIn ?
                        <LogIn logFunc={logInFunc}/>
                        :
                        <Wall logFunc={logInFunc}/>
                    }
                </Route>
                <Route path="*">
                    <Error error={"Page not found"}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
