import { useContext } from "react";
import { AppContext } from "./store/app-context";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const ctx = useContext(AppContext);

  /* return (
     <Router>
      <MainHeader className={ctx.theme === "dark" ? "dark" : ""} />
      <Routes>
        <main>
          <Route path="/" element={!ctx.isLoggedIn && <Login />}></Route>
          <Route path="/home" element={ctx.isLoggedIn && <Home />}></Route>
        </main>
      </Routes>
    </Router> */

  return (
    <div className={`App ${ctx.theme === "dark" ? "dark" : ""}`}>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </div>
  );
}

export default App;
