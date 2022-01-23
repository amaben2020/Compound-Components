import React from "react";
import Expandable from "./components/compound/Expandable";

const App = () => {
  return (
    <div>
      <Expandable>
        <Expandable.Header>React hooks</Expandable.Header>
        <Expandable.Icon />
        <Expandable.Body>Hooks are awesome</Expandable.Body>
      </Expandable>
    </div>
  );
};

export default App;
