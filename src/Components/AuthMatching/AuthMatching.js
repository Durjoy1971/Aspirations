import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthMatching = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {" "}
      {authUser ? (
        <p> Signed In </p>
      ) : (
        <p>
          {" "}
          <button onClick={userSignOut}> Signed Out </button>{" "}
        </p>
      )}
    </div>
  );
};

export default AuthMatching;
