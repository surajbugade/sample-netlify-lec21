import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Home from "./Home";
import { firebase } from "./utils/firebase";
import { Route, Switch } from "react-router";

let UserContext = React.createContext();

function App() {
  let [user, setUser] = useState();

  useEffect(function () {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);

      if (user) {
        user
          .getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            console.log(idToken);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export { App, UserContext };
