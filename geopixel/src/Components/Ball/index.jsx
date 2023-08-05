import { useState, useEffect, useRef } from 'react';

import styles from "./Ball.module.css"


function Ball() {
    const [isShown, setIsShown] = useState(
        { x: 0, y: 0 }
    );

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    const ref = useRef(null);

    const getListSize = () => {
        const newWidth = ref.current.clientWidth;
        setWidth(newWidth);
    
        const newHeight = ref.current.clientHeight;
        setHeight(newHeight);
      };

      useEffect(() => {
        getListSize();
      }, []);

      useEffect(() => {
        window.addEventListener("resize", getListSize);
      }, []);


    function randomNumberInRange(min, max) {
        // get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div ref={ref} className={styles.container}>
            <span className={styles.ball}
                onMouseEnter={() => setIsShown({ x: randomNumberInRange(-(height/2)+12,(height/2)-12), y: randomNumberInRange(-(width/2),(width/2)) })}
                onMouseLeave={() => setIsShown({ x: 0, y: 0 })}
                style={{
                    transform: `translateY(${isShown.y}px) translateX(${isShown.x}px)`

                }}
            >


            </span>
          
        </div>
    )
}

export default Ball
