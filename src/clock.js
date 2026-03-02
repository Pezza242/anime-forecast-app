import React, { useState, useEffect } from "react";
import moment from "moment";

export default function Clock({ theme }) {
  const [time, setTime] = useState(moment().format("LT"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("LT"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="time" style={{ backgroundColor: theme.colour }}>
      {time}
    </p>
  );
}
