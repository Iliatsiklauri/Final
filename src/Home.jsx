import { createContext, useState } from 'react';
import Num1 from './components/Num1';
import Num2 from './components/Num2';
import Num3 from './components/Num3';
import Num4 from './components/Num4';
import Num5 from './components/Num5';
import Num6 from './components/Num6';
import useFetch from './components/useFetch';
import Num7 from './components/Num7';
import Num8 from './components/Num8';
import Num9 from './components/Num9';
import { users } from './data';
import { Link } from 'react-router-dom';
export const Globall = createContext(null);

function Home() {
  const [text, setText] = useState('');

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="flex gap-10 border-[1px] border-blue-400">
        {users.map((el, key) => (
          <div key={key}>
            <Link to={`${el.name}`}>{el.name}</Link>
          </div>
        ))}
      </div>
      {/* <Num1 name={'gela'} /> */}
      {/* <Num2 /> */}
      {/* <Num3 /> */}
      {/* <Num4 /> */}
      {/* <h1>{text}</h1> */}
      {/* <Globall.Provider value={{ text, setText }}>
        <Num5 />
      </Globall.Provider> */}
      {/* <Num6 /> */}
      {/* <Num7 /> */}
      {/* <Num8 /> */}
      {/* <Num9 /> */}
    </div>
  );
}

export default Home;
