import React from "react";
import { Tag } from "lucide-react";
import "./TagItem.css";

const TagItem = ({ name }) => {
  return (
    <li className="tag-item">
      <Tag className="tag-icon"/>
      {name}
    </li>
  );
};

export default TagItem;
