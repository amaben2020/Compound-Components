import React, { createContext, useState, useCallback, useMemo } from "react";

const ExpandableContext = createContext();
const { Provider } = ExpandableContext;

const Expandable = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  // look here 👇
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );
  // look here 👇
  const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);

  //useMemo takes a callback that returns the object value {expanded, toggle} and we pass an array dependency [expanded, toggle]. This means that the memoized value remains the same unless the dependencies change.
  return <Provider value={value}>{children}</Provider>;
};

export default Expandable;
