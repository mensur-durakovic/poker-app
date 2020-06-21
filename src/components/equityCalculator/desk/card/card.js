import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
export default function DeskCard(props) {
  const { central, title, active } = props;
  return (
    <div className="desk-card-wrapper">
      {central && <span className={`desk-card-title`}>{title}</span>}
      <div className={`desk-card ${central ? "desk-card-central" : ""} ${active ? 'desk-card-active' : ''}`}>
        <FontAwesomeIcon icon={faPlusCircle} />
      </div>
    </div>
  );
}
