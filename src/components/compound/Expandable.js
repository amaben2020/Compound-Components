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
  return <Provider value={value}>{children}</Provider>;
};

export default Expandable;
