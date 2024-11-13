import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      // Countdown is over
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold font-primaryBold mb-5 p-2">Countdown to Event</h2>
      <div className="flex justify-center gap-4 mt-4">
        <div className="flex flex-col items-center">
          <span className="lg:text-7xl md:text-6xl text-4xl font-primaryBold text-[#ea4335]">{timeLeft.days}:</span>
          <span className="font-primaryRegular">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="lg:text-7xl md:text-6xl text-4xl font-primaryBold text-[#34a853]">{timeLeft.hours}:</span>
          <span className="font-primaryRegular">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="lg:text-7xl md:text-6xl text-4xl font-primaryBold text-[#f9ab00]">{timeLeft.minutes}:</span>
          <span className="font-primaryRegular">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="lg:text-7xl md:text-6xl text-4xl font-primaryBold text-[#4285f4]">{timeLeft.seconds}</span>
          <span className="font-primaryRegular">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
