import React from "react";
import ImageList from "./containers/ImageList";
import SearchArea from "./containers/SearchArea";

const App = () => {
  return (
    <div>
      <h2>GIPHY APP(React-Redux)</h2>
      <SearchArea />
      <ImageList />
    </div>
  );
};

export default App;
