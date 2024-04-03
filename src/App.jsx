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
import { Route, Routes } from 'react-router-dom';
export const Globall = createContext(null);
import Home from './Home';
import Posts from './Posts';

function App() {
  const [text, setText] = useState('');

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Posts />} />
    </Routes>
  );
}

export default App;
