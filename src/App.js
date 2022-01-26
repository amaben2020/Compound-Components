import React from "react";
import Expandable from "./components/compound/Expandable";

const App = () => {
  const onExpand = (expanded) => {
    if (expanded === true) {
      return true;
    } else if (expanded === false) {
      return false;
    }
  };

  const information = [
    {
      header: "Why everyone should live forever",
      note: "This is highly sensitive information ... !!!!",
    },
    {
      header: "The internet disappears",
      note: "I just uncovered the biggest threat...",
    },
    {
      header: "The truth about Elon musk and Mars!",
      note: "Nobody tells you this...",
    },
  ];
  const shouldExpand = () => console.log("ok");
  return (
    <div>
      {/* directly destructuring the properties */}
      {information.map(({ header, note }, index) => (
        <Expandable key={index} onExpand={onExpand} shouldExpand={shouldExpand}>
          <Expandable.Header style={{ color: "red" }}>
            {header} - {note}
          </Expandable.Header>
          <Expandable.Icon />
          <Expandable.Body style={{ color: "red", border: "1px solid teal" }}>
            {note} - {index}
          </Expandable.Body>
        </Expandable>
      ))}
    </div>
  );
};

export default App;
