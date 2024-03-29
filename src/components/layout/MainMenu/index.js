import React, { useState } from "react";
import { Link } from "react-router-dom";

import LoginLinks from "./LoginLinks";
import LogoutLinks from "./LogoutLinks";
import { useAuth } from "firebaseConfig";
import "./style.css";
import { SearchBox, SearchIcons } from "components";

export default function MainMenu() {
  const [isVisible, setIsVisible] = useState(true);
  const currentUser = useAuth();

  function toggleIsVisible() {
    setIsVisible(!isVisible);
  }

  return (
    <nav>
      <ul className="mainmenu">
        <Link className="mainmenu__header " to="/" alt="logo">
          Simple Vege Life
        </Link>
        <div className="mainmenu__container">
          <SearchIcons isVisible={isVisible} toggleIsVisible={toggleIsVisible} />
          {currentUser ? <LoginLinks /> : <LogoutLinks />}
        </div>
      </ul>
      {!isVisible && <SearchBox isVisible={isVisible} toggleIsVisible={toggleIsVisible} />}
    </nav>
  );
}
