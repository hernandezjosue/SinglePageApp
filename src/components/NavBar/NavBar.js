import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { loginService } from "/Users/josuehernandez/Documents/master/MasterCurse/src/services/UserServices.js";
import { AuthContext } from "/Users/josuehernandez/Documents/master/MasterCurse/src/context/AuthContext.js"; //contexto a usar
function NavBar() {
  const { setToken, token } = useContext(AuthContext);
  //context

  const loginAction = () => {
    const response = loginService("pep@email.com", "123");
    if (response) {
     
      setToken(response);
    } else {
      alert("email incorrecto");
    }
  };
  const logoutAction = () => {
    setToken("");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div classname="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/CounterFunctional">
            pp
          </Link>
          {token ?(
              <Link className="nav-item nav-link" to="/Countries">
              paises
            </Link>
          ):
          (<Link className="nav-item nav-link" to="/Countries">
          paises
        </Link>)
          }
          
          <Link className="nav-item nav-link" to="/CounterFunctional">
            showCompon
          </Link>
          <Link className="nav-item nav-link" to="/Show">
            mensj
          </Link>
          {token ? (
            <Link className="nav-link" onClick={logoutAction}>
              Logout
            </Link>
          ) : (
            <Link className="nav-link" onClick={loginAction}>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
