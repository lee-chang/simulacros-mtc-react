import React from 'react';

interface TimerProps {
  remainingTime: number;
}

const Timer: React.FC<TimerProps> = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const isLowTime = remainingTime <= 300; // 5 minutes

  return (
    <div className={`font-mono text-lg font-bold px-3 py-1 rounded-md ${isLowTime ? 'text-red-500 animate-pulse' : 'text-slate-700 dark:text-slate-200'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{formattedTime}</span>
    </div>
  );
};

export default Timer;
