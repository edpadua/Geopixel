import { useState, useEffect } from "react"

import styles from "./Clock.module.css"

function Clock() {
  const [timeClock, setTimeClock]=useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTimeClock(date.toLocaleTimeString());
    }, 1000);
  }, []);


  return (
    <div className={styles.container}>
       <h2 className={styles.clock_text}>{timeClock}</h2>
    </div>
  )
}

export default Clock
