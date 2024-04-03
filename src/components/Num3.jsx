import React, { useState } from 'react';

export default function Num3() {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState('');
  const sbmt = (e) => {
    e.preventDefault();
    setArr([text, ...arr]);
    setText('');
  };
  return (
    <div
      className="bg-gray-500 flex items-center justify-center flex-col w-60 h-[300px]"
      onSubmit={(e) => sbmt(e)}
    >
      <form action="">
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          className="bg-gray-100"
          placeholder="Enter"
          value={text}
        />
        <button>Add</button>
      </form>
      <div>
        {arr.map((el, key) => (
          <p key={key}>{el}</p>
        ))}
      </div>
    </div>
  );
}
