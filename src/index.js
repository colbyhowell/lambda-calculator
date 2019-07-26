import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Numbers from '../src/components/ButtonComponents/NumberButtons/Numbers'

function HomeApp() {

    return(
        <Numbers />
    )
}




ReactDOM.render(<App />, document.getElementById("root"));
