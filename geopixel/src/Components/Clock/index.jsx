import { useState, useEffect } from "react"

import styles from "./Clock.module.css"

function Clock() {
  //Stores local time
  const [timeClock, setTimeClock]=useState();

  //Updates time state
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTimeClock(date.toLocaleTimeString());
    }, 1000);
  }, []);

  //Renders time
  return (
    <div className={styles.container}>
       <h2 className={styles.clock_text}>{timeClock}</h2>
    </div>
  )
}

export default Clock
