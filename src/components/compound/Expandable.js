import React, {
  createContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
} from "react";
import Header from "./Header";
import Icon from "./Icon";
import Body from "./Body";

//useEffect is always invoked on mount, we want to be able to toggle this component

export const ExpandableContext = createContext();

const { Provider } = ExpandableContext;

const Expandable = ({ children, onExpand }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );
  const componentJustMounted = useRef(true);
  console.log(componentJustMounted);

  //this implies that when the component mounts, the ref is true, but when you click, the ref is false and this changes based on the expanded prop.
  // When the component mounts, the ref is true, the onExpanded fn only fires when the ref is false.
  useEffect(() => {
    if (!componentJustMounted.current) {
      onExpand(expanded);
    }
    componentJustMounted.current = false;
  }, [expanded]);
  const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);
  return <Provider value={value}>{children}</Provider>;
};

// Remember this is just a personal reference. It's not mandatory
Expandable.Header = Header;
Expandable.Body = Body;
Expandable.Icon = Icon;
export default Expandable;
