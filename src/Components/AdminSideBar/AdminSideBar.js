import React, { useContext } from "react";
import "./AdminSideBar.css";
import { UserContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  const { state } = useContext(UserContext);

  const CheckingAdmin = () => {
    if (state != null && state.email === "durjoybarua1971@gmail.com") {
      return (
        <>
          <div className="sidebar-header">
            <div className="sidebar-nav">
              <div className="sidebar-user">
                <img
                  src="https://img.freepik.com/premium-vector/boy-with-braces-teeth-dental-care_254685-1461.jpg"
                  className="sidebar-user-img"
                  alt="User profile"
                />
                <div className="sidebar-user-details">
                  <h2>ASPIRANT</h2>
                </div>
              </div>
              <ul className="sidebar-ul">
                <Link to="/update-delete">
                <li className="sidebar-li">
                  <FontAwesomeIcon className="sidebar-icon" icon={faTrashCan} />
                  <p>Delete</p>
                </li>
                </Link>
                <Link to="/add">
                  <li className="sidebar-li">
                    <FontAwesomeIcon className="sidebar-icon" icon={faPlus} />
                    <p>Add</p>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="sidebar-container">
      <CheckingAdmin />
    </div>
  );
};

export default AdminSideBar;