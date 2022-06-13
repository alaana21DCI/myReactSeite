import { useContext } from "react";
import { AppContext } from "../../store/app-context";
import Button from "../UI/Button";

import "./Navigation.css";

const Navigation = () => {
  const ctx = useContext(AppContext);
  return (
    <nav className="nav">
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Card</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Favorate</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
        <li>
          <Button onClick={ctx.toggleTheme} className="theme-btn">
            {ctx.theme === "light" ? "dark" : "light"}
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
