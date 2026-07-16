import "./Navbar.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

function Navbar() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (

    <header className="navbar">
      <div className="welcome">
        <h1>
          Welcome Back, {user.name} 👋
        </h1>
        <p>
          Track, manage and grow your tokenized asset portfolio
        </p>
      </div>

      <div className="nav-actions">
        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search assets..."
          />

        </div>

        <button className="notification">
          <FaBell />
          <span></span>
        </button>

        <div
          className="profile"
          ref={menuRef}
        >

          <div
            className="profile-info"
            onClick={() =>
              setShowMenu(!showMenu)
            }
          >

            <FaUserCircle />

            <div>
              <h4>{user.name}</h4>
              <p>{user.email}</p>
            </div>
          </div>

          {showMenu && (

            <div className="profile-menu">

              <button
                onClick={() => {
                  setShowMenu(false);
                  navigate("/profile");
                }}
              >

                👤 My Profile

              </button>
              <button
                onClick={() => {
                  setShowMenu(false);
                  navigate("/settings");
                }}
              >
                ⚙ Settings
              </button>

              <button
                onClick={handleLogout}
              >
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>

  );
}

export default Navbar;