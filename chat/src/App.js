import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
// the below components will be created shortly
import Login from "./components/Login";
import Groupchat from "./components/Groupchat";

// convert class component into functional component
// class App extends Component {
//   constructor(props) {
//     super(props);
//   }

function App(props){
const [useState, setState] = useState(0)


    return (
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/chat" component={Groupchat} />
      </Switch>
    );

}
export default App;
