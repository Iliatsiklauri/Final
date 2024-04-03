import { useReducer } from 'react';

const initialValue = {
  count: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case 'increament':
      return { count: state.count + 1 };
    case 'decreament':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
  }
}

export default function Num6() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div className="flex  justify-center gap-10">
      {state.count}
      <button onClick={() => dispatch({ type: 'increament' })}>increament</button>
      <button onClick={() => dispatch({ type: 'decreament' })}>decreament</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  );
}
