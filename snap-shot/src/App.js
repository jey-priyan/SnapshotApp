import React, {useState} from "react";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Gallery from "./Component/Gallery";
import { AppContext } from "./Context/AppContext";

const App = () => {
  const [images, SetImages] = useState([])

  return (
    <AppContext.Provider value={{images, SetImages}}>
      <Router>
      <Routes>
          <Route path="/" exact Component={Gallery}>

          </Route>
          </Routes>
      </Router>
    </AppContext.Provider>

  )
}

export default App;