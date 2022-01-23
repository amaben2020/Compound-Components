import { useContext } from "react";
import { ExpandableContext } from "./Expandable";

const Body = ({ children }) => {
  const { expanded } = useContext(ExpandableContext);
  //cool code or expanded && children
  return expanded ? children : null;
};
export default Body;
