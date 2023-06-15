import React, { useContext } from "react";
import "./UserSideBar.css";
import { UserContext } from "../../App";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faClapperboard,
//   faClock,
//   faIdBadge,
// } from "@fortawesome/free-solid-svg-icons";

const UserSideBar = () => {
  const { state} = useContext(UserContext);

  const CheckingUser = () => {
    if (state != null && state.email !== "durjoybarua1971@gmail.com" && state.isLoggedIn) {
      return (
        <>
          <div className="user-sidebar-header">
            <div className="user-sidebar-nav">
              <div className="user-sidebar-user">
                <img
                  src="https://img.freepik.com/premium-vector/boy-with-dental-braces-dental-care-little-boy-portrait-circular-frame_254685-975.jpg?w=740"
                  className="user-sidebar-user-img"
                  alt="User profile"
                />
                <div className="user-sidebar-user-details">
                <h2>{state.userName}</h2>
                </div>
              </div>
              {/* <ul className="user-sidebar-ul">
                <li className="user-sidebar-li">
                  <FontAwesomeIcon
                    className="user-sidebar-icon"
                    icon={faClock}
                  />
                  <p>Watch Later</p>
                </li>
                <li className="user-sidebar-li">
                  <FontAwesomeIcon
                    className="user-sidebar-icon"
                    icon={faIdBadge}
                  />
                  <p>Profile</p>
                </li>
                <li className="user-sidebar-li">
                  <FontAwesomeIcon
                    className="user-sidebar-icon"
                    icon={faClapperboard}
                  />
                  <p>Finished Course</p>
                </li>
              </ul> */}
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="user-sidebar-container">
      <CheckingUser />
    </div>
  );
};

export default UserSideBar;
