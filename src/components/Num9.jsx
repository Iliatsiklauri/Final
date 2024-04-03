import React, { useState } from 'react';
import Num8 from './Num8';
import Num9child from './Num9child';

export default function Num9() {
  const [num, setNum] = useState(0);
  console.log('parent rendered');
  return (
    <div>
      <button onClick={() => setNum((prev) => prev + 1)}>increase</button>
      <Num9child />
    </div>
  );
}
