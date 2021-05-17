import React from "react";
import "./navigator.scss";

const Navigator = ({ pages, action, currentPage }) => {
  if (!Array.isArray(pages)) return null;

  return (
    <div className="navigator">
      {pages.map((page, i) => (
        <div
          key={i}
          className={`navigator-item ${i === currentPage ? "active" : ""} `}
          data-title={page}
          onClick={() => action(i)}
        ></div>
      ))}
    </div>
  );
};

export default Navigator;
