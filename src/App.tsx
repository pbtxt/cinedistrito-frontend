import * as React from "react";
import "./App.css";
// TODO: fix type
// @ts-ignore
import Listing from "./components/organisms/Listing/index.tsx";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Listing />
    </div>
  );
};

export default App;
