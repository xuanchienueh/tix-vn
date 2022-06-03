import React, { useEffect, useRef } from "react";
import confirmReload from "../../util/confirmReload/confirmReload";
import { Prompt } from "react-router";

export default function ShowTime() {
  confirmReload((e) => {
    e.preventDefault();
    e.returnValue = "";
  });
  const userIsDoingSomething = () => {
    console.log(213124124);
    return false;
  };
  return (
    <div>
      <Prompt when={true} message="dsfd" />
      <span>ShowTime</span>
    </div>
  );
}
