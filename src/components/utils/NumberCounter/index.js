import React, { useEffect, useState, useRef } from 'react';
import Style from "./NumberCounter.module.scss";

const NumberCounter = ({ props }) => {
  const duration = 2;
  const [count, setCount] = useState("0");
  const countRef = useRef(null);
  const { number } = props;

  useEffect(() => {
    const startCounting = () => {
      let start = 0;
      const end = parseInt(number.substring(0, 3));
      if (start === end) return;

      let totalMilSecDur = parseInt(duration);
      let incrementTime = (totalMilSecDur / end) * 1000;

      let timer = setInterval(() => {
        start += 1;
        setCount(String(start) + number.substring(3));
        if (start === end) clearInterval(timer);
      }, incrementTime);
    };

    let observer; // Declare the observer variable

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.unobserve(countRef.current); // Use countRef.current from the ref variable
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed to trigger the counter at different scroll positions
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    // return () => {
    //   if (observer) {
    //     observer.unobserve(countRef.current); // Use countRef.current from the ref variable
    //   }
    // };
  }, [number]); // Add 'number' as a dependency
  return <div className={Style.numberCounter} ref={countRef}>{count}</div>;
};

export default NumberCounter;