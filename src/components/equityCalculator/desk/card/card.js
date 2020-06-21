import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
export default function DeskCard(props) {
  const { central, title } = props;
  return (
    <div className="desk-card-wrapper">
      {central && <span className={`desk-card-title`}>{title}</span>}
      <div className={`desk-card ${central ? "desk-card-central" : ""}`}>
        <FontAwesomeIcon icon={faPlusCircle} />
      </div>
    </div>
  );
}
