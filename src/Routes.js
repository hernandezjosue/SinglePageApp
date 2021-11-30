import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import MensaggeView from "./Views/MensaggeView";
import CountrieView from "./Views/CountriesView";
import NavBarView from "./Views/NavBarView";
import CounterFunctionalView from "./Views/CounterFunctionalView";
import HomeView from "./Views/HomeView";

import { AuthContext } from "./context/AuthContext";

function Routes() {
  const { token } = useContext(AuthContext);
  return (
    <>
      <Route exact path="/">
        <NavBarView >
          <HomeView />
        </NavBarView>
      </Route>

      <Route path="/Countries">
        {token ? (
          <NavBarView isdashboard={true}>
            <CountrieView />
          </NavBarView>
        ) : (
          <Redirect to="/" />
        )}
      </Route>
      <Route path="/CounterFunctional">
        <NavBarView>
          <CounterFunctionalView />
        </NavBarView>
      </Route>

      <Route path="/Show">
        <NavBarView>
          <MensaggeView />
        </NavBarView>
      </Route>
    </>
  );
}

export default Routes;
