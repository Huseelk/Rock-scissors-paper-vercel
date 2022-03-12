import calculateWinner from "./calculateWinner.js"
import "./Winner.css";

const Winner = (props) => {
    const handleRestartClick = () => {
        props.setPlayerChoose(null);
    }

    const winner = calculateWinner(props.playerChoose, props.computerChoose)

    return (
        <div className='wrapper'>
        <div className='restartDiv'>
            <button onClick={handleRestartClick} className='restartButton'>Restart</button>
        </div>
        <div className='chooseDiv'>
            <img className='playerChoose' src={props.playerChoose} alt="Player Choose" />
            <img className='computerChoose' src={props.computerChoose} alt="Computer Choose" />
        </div>
        <div className='winnerDiv'>
            {winner}
        </div>
        </div>
    );
}

export default Winner;
