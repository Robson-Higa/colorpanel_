import { useState} from 'react';
import ColorPanel from './components/ColorPanel';
import style from "./App.module.css"

const App = () => {
  
  const [red, setRed] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);
  const [alpha, setAlpha] = useState<number>(0.5);
 
  return (
    <div className={style.container}>
      <ColorPanel red={red} green={green} blue={blue} alpha={alpha} />
      <div className={style.input}>
        <label>
          Red
          <input
            type="range"
            min="0"
            max="255"
            value={red}
            onChange={(e) => setRed(Number(e.target.value))}
          />
        </label>
        <label>
          Green
          <input
            type="range"
            min="0"
            max="255"
            value={green}
            onChange={(e) => setGreen(Number(e.target.value))}
          />
        </label>
        <label>
          Blue
          <input
            type="range"
            min="0"
            max="255"
            value={blue}
            onChange={(e) => setBlue(Number(e.target.value))}
          />
        </label>
        <label>
          Alpha
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={alpha}
            onChange={(e) => setAlpha(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
};

export default App;
