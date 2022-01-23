import { useContext } from "react";
import { ExpandableContext } from "./Expandable";
import "./body.css";
const Body = ({ children, className = "", ...otherProps }) => {
  const { expanded } = useContext(ExpandableContext);

  const combinedClassNames = ["Expandable-panel", className].join("");
  return expanded ? (
    <div className={combinedClassNames} {...otherProps}>
      {children}
    </div>
  ) : null;
};
export default Body;
