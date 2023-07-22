import React from "react";
import { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 100 }: Props) => {
  const [expanded, setExpanded] = useState(false);
  if (children.length < maxChar) return <p>{children}</p>;
  return (
    <>
      <div>{expanded ? children.substring(0, maxChar) : children}</div>;
      <button
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "Less" : "More"}
      </button>
    </>
  );
};

export default ExpandableText;
