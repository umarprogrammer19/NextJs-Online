"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
    // Initialize state to store remaining time
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56,
    });

    useEffect(() => {
        // Function to decrement time
        const tick = () => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else if (days > 0) {
                    days--;
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                } else {
                    // Timer finished
                    clearInterval(timer);
                }

                return { days, hours, minutes, seconds };
            });
        };

        // Start the timer
        const timer = setInterval(tick, 1000);

        // Cleanup on component unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <ul className="flex gap-x-4 text-lg lg:gap-x-3 lg:mr-[620px] lg:text-3xl">
            <li className="flex flex-col items-center font-bold">
                <span className="text-xs font-medium">Days</span>
                {String(timeLeft.days).padStart(2, "0")} :
            </li>
            <li className="flex flex-col items-center font-bold">
                <span className="text-xs font-medium">Hours</span>
                {String(timeLeft.hours).padStart(2, "0")} :
            </li>
            <li className="flex flex-col items-center font-bold">
                <span className="text-xs font-medium">Minutes</span>
                {String(timeLeft.minutes).padStart(2, "0")} :
            </li>
            <li className="flex flex-col items-center font-bold">
                <span className="text-xs font-medium">Seconds</span>
                {String(timeLeft.seconds).padStart(2, "0")}
            </li>
        </ul>
    );
};

export default CountdownTimer;
