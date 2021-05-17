import "./App.css";
import { useContext } from "react";
import { UserContext } from "./App";
import axios from "axios";
import { useHistory } from "react-router";
import {firebase} from "./utils/firebase";

function Home() {
  let { user } = useContext(UserContext);
  let history = useHistory();

  return user ? (
    <div>
      <h1>{user.displayName}</h1>
      <h1>{user.uid}</h1>
      <button
        onClick={function () {
          axios
            .get("https://desolate-ravine-33197.herokuapp.com/alive")
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }}
      >
        I am Alive
      </button>
      <button
        onClick={function () {
          firebase.auth().signOut().then(() => {
            console.log("You are logged out");
          }).catch((error) => {
            console.log(error);
          });
        }}
      >
        Logout
      </button>
    </div>
  ) : (
    <div>
      <h1>Please Log In</h1>
      <button
        onClick={function () {
          history.push("/login");
        }}
      >
        Log In
      </button>
    </div>
  );
}

export default Home;
