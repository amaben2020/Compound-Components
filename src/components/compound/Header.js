import React, { useContext } from "react";
import { ExpandableContext } from "./Expandable";
import "./header.css";
// below is a default className not to make the className Expandable-Trigger nulll or undefined which is irrelevant
const Header = ({ children, className = "", ...otherProps }) => {
  const { toggle } = useContext(ExpandableContext);

  //the otherProps here means that anything passed into the component would represent the item where it is i.e style={{color: "red"}}

  //Removing False Values#
  // This solution handles the previously discussed edge cases. If you also want to be explicit about removing null, undefined of falsu values
  // const combinedClassName = ['Expandable-trigger',className].join('')
  const combinedClassName = ["Expandable-trigger", className]
    .filter(Boolean)
    .join("");

  return (
    <button className={combinedClassName} {...otherProps} onClick={toggle}>
      {children}
    </button>
  );
};
export default Header;
