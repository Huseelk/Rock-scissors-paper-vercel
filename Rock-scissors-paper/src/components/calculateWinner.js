export default function calculateWinner(playerChoose, computerChoose) {
    if (playerChoose === computerChoose) return 'DRAW';

    if (playerChoose === "/static/media/rock.1e390fc0ca626155ffe2.png" && computerChoose === "/static/media/scissors.e0950529528d12741716.png") return "You Win";

    if (playerChoose === "/static/media/paper.ae05946750a8ecd097e6.png" && computerChoose === "/static/media/rock.1e390fc0ca626155ffe2.png") return "You WIN";
    
    if (playerChoose === "/static/media/scissors.e0950529528d12741716.png" && computerChoose === "/static/media/paper.ae05946750a8ecd097e6.png") return "You WIN";

    else {
        return "You LOSE"
    }
}