import React from "react";

function Custom(props) {
    console.log(props);
  return (
    <>
      <h2>name : {props.name}</h2>
      <h2>age : {props.age}</h2>
    </>
  );
}

export default Custom;
