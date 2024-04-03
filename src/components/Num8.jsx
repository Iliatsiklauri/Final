import { useEffect, useState } from 'react';

export default function Num8() {
  const [seconds, setSeconds] = useState(0);
  const [clock, setClock] = useState(false);
  useEffect(() => {
    let interval = 0;
    if (clock) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [seconds, clock]);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>{seconds}</h1>
      <div className="flex items-center justify-center gap-3">
        <button onClick={() => setClock(true)}>start</button>
        <button onClick={() => setClock(false)}>stop</button>
        <button
          onClick={() => {
            setClock(false);
            setSeconds(0);
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
}
