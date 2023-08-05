import { useState, useEffect, useRef } from 'react';

import styles from "./Ball.module.css"


function Ball() {

    //Ball's coordenates 
    const [coord, setCoord] = useState(
        { x: 0, y: 0 }
    );

    //Containter's height 
    const [height, setHeight] = useState(0);
    //Containter's width 
    const [width, setWidth] = useState(0);

    const ref = useRef(null);

    //Get the width and height of container
    const getContainerSize = () => {
        const newWidth = ref.current.clientWidth;
        setWidth(newWidth);
    
        const newHeight = ref.current.clientHeight;
        setHeight(newHeight);
      };

      //Gets window's width and height
      useEffect(() => {
        getContainerSize();
      }, []);

      useEffect(() => {
        window.addEventListener("resize", getContainerSize);
      }, []);

    //Generate random number in a range
    function randomNumberInRange(min, max) {
        // get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div ref={ref} className={styles.container}>

            {/** 
               Ball element
               Translation of the x and y axes randomly on hover
            **/}
            <span className={styles.ball}
                onMouseEnter={() => setCoord({ x: randomNumberInRange(-(height/2)+12,(height/2)-12), y: randomNumberInRange(-(width/2),(width/2)) })}
                onMouseLeave={() => setCoord({ x: 0, y: 0 })}
                style={{
                    transform: `translateY(${coord.y}px) translateX(${coord.x}px)`

                }}
            >
            </span>
          
        </div>
    )
}

export default Ball
