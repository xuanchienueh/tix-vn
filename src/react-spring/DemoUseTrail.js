import React, { useState } from "react";
import { useTrail, animated } from "react-spring";
const items = ["Lorem", "Ipsum", "Dolor", "Sit"];

export default function DemoUseTrail() {
  const [toggle, setToggle] = useState(true);
  const trail = useTrail(items.length, {
    to: {
      opacity: toggle ? 1 : 0,
      transform: toggle ? "translateX(0)" : "translateX(20px)",
      height: toggle ? 80 : 0,
    },
    from: { opacity: 0, height: 0, transform: "translateX(20px)" },
    config: { duration: 200 },
  });

  return (
    <div
      className="container"
      style={{ width: 500, height: 1000 }}
      // onClick={() => {
      //   setToggle((toggle) => !toggle);
      //   console.log(123);
      // }}
    >
      <div>
        <button
          onClick={() => {
            setToggle((toggle) => !toggle);
          }}
        >
          change status
        </button>
      </div>
      {trail.map((styles, index, arr) => (
        <animated.div style={styles} key={index}>
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
}
