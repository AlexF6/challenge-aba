//src/components/layout/sidebar/TagItem.jsx
import React from "react";
import TagImage from "../../../assets/tag.svg";
import "../../../styles/Layout/sidebar/TagItem.css";

const TagItem = ({ name }) => {
  return (
    <li className="tag-item">
      <img src={TagImage} className="tag-icon"/>
      {name}
    </li>
  );
};

export default TagItem;
