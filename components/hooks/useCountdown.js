import { useEffect, useState } from "react";

const useCountdown = (currentTime, targetTime) => {

    //const [countDown, setCountDown] = useState(
    //    targetTime - currentTime
    //);

    const countDown = targetTime - currentTime;

    //useEffect(() => {
    //    const interval = setInterval(() => {
    //        setCountDown(countDown - 1000);
    //    }, 1000);
//
    //    return () => clearInterval(interval);
    //}, [countDown]);

    return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  
    return [days, hours, minutes, seconds];
};

export default useCountdown;