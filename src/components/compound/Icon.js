import { useContext } from "react";
import { ExpandableContext } from "./Expandable";
import "./icon.css";
const Icon = ({ className = "", ...otherProps }) => {
  const { expanded } = useContext(ExpandableContext);
  const combinedClassNames = ["Expandable-icon", className].join("");
  return (
    <span className={combinedClassNames} {...otherProps}>
      {expanded ? "-" : "+"}
    </span>
  );
};
export default Icon;
