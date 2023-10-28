import { useEffect, useState } from "react";
//usestate and effect are going to used almost all the time when making components
function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  //use effect to create interval
  useEffect(() => {
    const myTimer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    //returns will run when unmounted
    //no reason to keep counting when unmounted
    return () => {
      clearInterval(myTimer);
    };
  }),
    []; // [] effect runs once on component render

  return (
    <>
      <h2>Current Time: {time}</h2>
    </>
  );
}

export default Time;
