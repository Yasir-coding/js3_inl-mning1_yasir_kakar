import { useState, useEffect } from "react";
import Clock from "./Clock.jsx"


function Time() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setInterval(() => {

      const currentTime = new Date();
      const trimmedTime = currentTime.toLocaleTimeString();
      const trimmedDate = currentTime.toLocaleDateString();
      setTime(trimmedTime);
      setDate(trimmedDate);

    }, 1000);

  }, [])

  return (
    <>
      <Clock
        time={time}
        date={date}
      />
    </>
  )
}

export default Time;