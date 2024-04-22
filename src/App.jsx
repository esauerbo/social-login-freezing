import React from "react";
import { Amplify } from "aws-amplify";
import { getCurrentUser, signInWithRedirect, signOut } from "aws-amplify/auth";

import config from "./amplifyconfiguration.json";
Amplify.configure(config);

export default function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  React.useEffect(() => {
    getCurrentUser()
      .then(() => {
        setIsSignedIn(true);
      })
      .catch(() => {
        setIsSignedIn(false);
      });
  }, []);

  return (
    <div>
      {isSignedIn ? (
        <button
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => {
            // 'Google` can be replaced with other configured providers
            signInWithRedirect({ provider: "Google" });
          }}
        >
          Sign In
        </button>
      )}
    </div>
  );
}
