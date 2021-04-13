import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LogIn from "./components/pages/LogIn";
import Wall from "./components/pages/Wall";
import Post from "./components/pages/Post";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/post">
                    <Post
                        userId={" "}
                        id={" "}
                        title={" "}
                        body={" "}
                    />
                </Route>
                <Route path="/wall">
                    <Wall/>
                </Route>
                <Route path="/">
                    <LogIn/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
