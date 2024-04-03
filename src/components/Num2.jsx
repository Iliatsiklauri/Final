import { useState } from 'react';

export default function Num2() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        show\hide
      </button>
      {display && <p>hello </p>}
    </div>
  );
}
