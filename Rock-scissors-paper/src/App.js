import { useState } from 'react';
import paperImg from './images/paper.png';
import rockImg from './images/rock.png';
import scissorsImg from './images/scissors.png';
import Winner from './components/Winner';
import './App.css';


function App() {
  const [playerChoose, setPlayerChoose] = useState(null);
  const [computerChoose, setComputerChoose] = useState(null);

  const values = [paperImg, rockImg, scissorsImg];

  const handlePlayerClick = (e) => {
    setPlayerChoose(e.target.alt);
    setComputerChoose(values[Math.floor(Math.random() * 3)])
  }

  return (
    <div className="App">
      <div className='chooseDiv'>
        {
          !playerChoose ? (
            values.map(el => {
              return <img onClick={handlePlayerClick} key={el} src={el} alt={el} className="playerImg" />
            })
          ) : <Winner computerChoose={computerChoose} playerChoose={playerChoose} setPlayerChoose={setPlayerChoose}/>
        }
      </div>
    </div>
  );
}

export default App;
