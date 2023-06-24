import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./katbingham.js";
import "./styles.scss";

const appRouting = (
    <Router>
        <Switch>
            <Route exact path='/' element={<App/>} />
        </Switch>
    </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));