import { useState } from "react";

export default function TextExpander({
  children,
  collapseButtonText = "Show Less",
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  const style = {
    color: buttonColor,
    background: "none",
    border: "none",
    marginLeft: "6px",
    font: "inherit",
    cursor: "pointer",
  };

  function handletoggleExpand() {
    setIsExpanded((ex) => !ex);
  }

  return (
    <div className={className}>
      {displayText}
      <button onClick={handletoggleExpand} style={style}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
