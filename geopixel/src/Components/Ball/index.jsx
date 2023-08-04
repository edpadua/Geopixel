import { useState } from 'react';

import styles from "./Ball.module.css"


function Ball() {
    const [isShown, setIsShown] = useState(
        {x:0,y:0}
    );

    function randomNumberInRange(min, max) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    return (
        <div className={styles.container}>
            <span className={styles.ball}
                onMouseEnter={() => setIsShown({x:randomNumberInRange(-700,700),y:randomNumberInRange(-1000,1000)})}
                onMouseLeave={() => setIsShown({x:0,y:0})}
                style={{
                    transform: `translateY(${isShown.y}%) translateX(${isShown.x}%)`
                    
                  }}
            >
        

            </span>
        </div>
    )
}

export default Ball
