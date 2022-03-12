#[React's  Rock-scissors-paper].

##BEGIN_SRC sh
git clone https://github.com/Hustleea/Himework.git
cd  React-Rock-scissors-paper
npm install
npm start


##handlePlayerClick js
    const handlePlayerClick = (e) => {
      setPlayerChoose(e.target.alt);
      setComputerChoose(values[Math.floor(Math.random() * 3)])
    }
        // ...

##setComputerChoose js
        setComputerChoose(values[Math.floor(Math.random() * 3)])

##RestartClick_SRC js
    const handleRestartClick = () => {
        setPlayerChoose(null);
    }
        // ...
        

##Winner_SRC js
    if (playerChoose === computerChoose) return 'DRAW';

    if (playerChoose === "/static/media/rock.1e390fc0ca626155ffe2.png" && computerChoose === "/static/media/scissors.e0950529528d12741716.png") return "You Win";

    if (playerChoose === "/static/media/paper.ae05946750a8ecd097e6.png" && computerChoose === "/static/media/rock.1e390fc0ca626155ffe2.png") return "You WIN";
    
    if (playerChoose === "/static/media/scissors.e0950529528d12741716.png" && computerChoose === "/static/media/paper.ae05946750a8ecd097e6.png") return "You WIN";

    else {
        return "You LOSE"
    }

##END_SRC

Now if you run ~npm start~ in the project folder and open [[http://localhost:3000]] in the browser, you should see the location for each move in each button of the move history list.

** Bold the currently selected item
Append this stype for bold item to your =src/index.css= file: