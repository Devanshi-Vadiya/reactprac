import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <h2>Toggle Status: {isOn ? "ON" : "OFF"}</h2>

      <button onClick={toggleHandler}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default Toggle;
