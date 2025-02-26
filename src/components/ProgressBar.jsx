import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [currentPercent, setCurrentPercent] = useState(5);

  useEffect(() => {
    if (currentPercent < 100) {
      const randomNumber = Math.floor(Math.random() * 5) + 1;
      let timer = setTimeout(() => {
        setCurrentPercent((prev) => Math.min(prev + randomNumber, 100));
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [currentPercent]);

  return (
    <div className="w-[500px] rounded-full h-[50px] border border-slate-300 relative overflow-hidden">
      <div
        className={`absolute max-w-full h-full bg-green-400 transition-all ease-linear duration-200`}
        style={{ width: `${currentPercent}%` }}
      ></div>
      <p className="text-center h-full absolute w-full pt-[8px] text-lg font-medium">
        {currentPercent}%
      </p>
    </div>
  );
};

export default ProgressBar;
