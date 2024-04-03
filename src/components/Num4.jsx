import { useRef } from 'react';

export default function Num4() {
  const redDiv = useRef(null);
  const func = () => {
    if (redDiv.current.style.background === 'red') {
      redDiv.current.style.background = 'green';
      redDiv.current.style.width = '100px';
      redDiv.current.style.height = '100px';
    } else {
      redDiv.current.style.background = 'red';
      redDiv.current.style.width = '200px';
      redDiv.current.style.height = '200px';
    }
  };
  return (
    <div className="flex flex-col">
      <button className="bg-gray-500" onClick={func}>
        Click
      </button>
      <div ref={redDiv} className="w-[200px] h-[200px] bg-red-500"></div>
    </div>
  );
}
