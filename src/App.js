import { BrowserRouter, Switch} from "react-router-dom";
import React from "react";

//contenedor de mis componentes a compartir informcion 
import { AuthProvider } from "./context/AuthContext";
import Routes from "./Routes";
function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <AuthProvider>
           <Routes/>
          </AuthProvider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
