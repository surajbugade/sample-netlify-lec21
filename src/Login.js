import "./App.css";
import { useContext } from "react";
import { UserContext } from "./App";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebase } from "./utils/firebase";

function Login() {
  let { user } = useContext(UserContext);

  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    // We will display Google.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  return (
    <div>
      {user ? (
        <button
          onClick={function () {
            firebase.auth().signOut();
          }}
        >
          Logout
        </button>
      ) : (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </div>
  );
}

export default Login;
