import React from "react";

function Card(props) {
  console.log("Card props", props.data.url);
  return (
    <div>
      <h1>{props.data.title}</h1>
      <p>Date: {props.data.date}</p>

      {props.data.url ? (
        <img src={`${props.data.url}`} alt="no mo errorz" />
      ) : (
        <p>Loading image....</p>
      )}
    </div>
  );
}

export default Card;
