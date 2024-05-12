import { useState, useEffect } from "react";

const useCurrentTime = ( date, time, dateString ) => {
    const [currentTime, setCurrentTime] = useState(
        date + 
        ((parseInt(time[0]) + (dateString[7] === "PM" ? 12 : 0)) * 60 * 60 * 1000) +
        (parseInt(time[1]) * 60 * 1000) +
        (parseInt(time[2]) * 1000)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(currentTime + 1000);
        }, 1000);

        return () => clearInterval(interval);
    }, [currentTime]);

    return (currentTime);
}

export default useCurrentTime;