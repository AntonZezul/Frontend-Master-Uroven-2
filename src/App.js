import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CategoryContent from "./pages/CategoryContent";
import PhotoContent from "./pages/PhotoContent";
import { useState } from "react";


function App() {
  const req = require("./storage/CategoryJSON");
  const [background, setBackground] = useState(req[0].photo);

  return (
    <BrowserRouter>
      <div className="App">
        <div
          id="headImage"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/img${background}')`,
          }}
        ></div>
        <div id="bottom">
          <Switch>
            <Route
              path={"/"}
              exact
              component={() => (
                <CategoryContent
                  onMouseEnter={setBackground}
                />
              )}
            />
            <Route
              path={"/album/:id"}>
                <PhotoContent
               bg={setBackground}
              />
              </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
