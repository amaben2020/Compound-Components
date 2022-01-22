import React, {
  createContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
} from "react";

//useEffect is always invoked on mount, we want to be able to toggle this component

const ExpandableContext = createContext();
const { Provider } = ExpandableContext;

const Expandable = ({ children, onExpand }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );
  const componentJustMounted = useRef(true);
  useEffect(() => {
    if (!componentJustMounted.current) {
      onExpand(expanded);
    }
    componentJustMounted.current = false;
  }, [expanded]);
  const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);
  return <Provider value={value}>{children}</Provider>;
};

export default Expandable;
