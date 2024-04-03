import { useContext } from 'react';
import { Globall } from '../App';

export default function Num5child() {
  const context = useContext(Globall);
  if (!context) return null;
  const { text, setText } = context;

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </div>
  );
}
