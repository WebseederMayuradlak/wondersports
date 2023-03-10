import React from "react";

function PrivacyCard(props) {
  return (
    <>
      <div className="p-card">
        <h3>{props.title}</h3>
        <p>
         {props.content}
        </p>
      </div>
    </>
  );
}

export default PrivacyCard;
