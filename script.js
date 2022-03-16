let winner;
var playerScore = 0;
var computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const reset = document.querySelector(".reset");

rock.addEventListener("click", checkIt);
paper.addEventListener("click", checkIt);
scissors.addEventListener("click", checkIt);
reset.addEventListener("click", resetScores);

function checkIt(event){
    var options = event.target;
    playerPick = options.id;
    const pickOptions = ["rock", "paper", "scissors"];
    var computerPick = pickOptions[Math.floor(Math.random() * pickOptions.length)];
    
    if (playerPick == computerPick){
        winner = "none";
        addResult();
    }
    else if (playerPick == "rock"){
        if (computerPick == "scissors"){
            winner = "player";
            addResult();
            playerScore++;
            document.getElementById("player-score").textContent = playerScore;
        }
        else{
            winner = "computer";
            addResult();
            computerScore++;
            document.getElementById("computer-score").textContent = computerScore;
        }  
    }
    else if (playerPick == "paper"){
        if (computerPick == "rock"){
            winner = "player";
            addResult();
            playerScore++;
            document.getElementById("player-score").textContent = playerScore;
        }
        else{
            winner = "computer";
            addResult();
            computerScore++;
            document.getElementById("computer-score").textContent = computerScore;
        }  
    }
    else if (playerPick == "scissors"){
        if (computerPick == "paper"){;
            winner = "player";
            addResult();
            playerScore++;
            document.getElementById("player-score").textContent = playerScore;
        }
        else{
            winner = "computer";
            addResult();
            computerScore++;
            document.getElementById("computer-score").textContent = computerScore;
        }  
    }
    
}

function addResult(event){
    let matchTime = new Date();

    //create date div
    let dateDiv = document.createElement("div");
    let dateString = document.createTextNode(matchTime.getHours() + ":" + matchTime.getMinutes() + ":" + matchTime.getSeconds());
    dateDiv.appendChild(dateString);
    dateDiv.classList.add("date-div");

    //create div to add to ul (id = "match-list")
    let addDiv = document.createElement("div");

    //create list element
    let newItem = document.createElement("li");

    //fetching insertion point
    let matchDiv = document.getElementById("match-list");

    if (winner == "player"){
        let text = document.createTextNode("Player Wins!");
        newItem.appendChild(text);
        addDiv.appendChild(newItem);
        addDiv.appendChild(dateDiv);

        addDiv.classList.add("player-win");
        matchDiv.appendChild(addDiv);

        //prepend the new div to the first index
        matchDiv.insertBefore(addDiv, matchDiv.firstChild);
        
    }
    else if (winner == "computer"){
        let text = document.createTextNode("Computer Wins!");
        newItem.appendChild(text);
        addDiv.appendChild(newItem);
        addDiv.appendChild(dateDiv);

        addDiv.classList.add("computer-win");
        matchDiv.appendChild(addDiv);

        //prepend the new div to the first index
        matchDiv.insertBefore(addDiv, matchDiv.firstChild);
        
    }
    else{
        let text = document.createTextNode("Draw!");
        newItem.appendChild(text);
        addDiv.appendChild(newItem);
        addDiv.appendChild(dateDiv);

        addDiv.classList.add("draw");
        matchDiv.appendChild(addDiv);

        //prepend the new div to the first index
        matchDiv.insertBefore(addDiv, matchDiv.firstChild);
        
    }
}

function resetScores(event){
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').textContent = 0;
    document.getElementById('computer-score').textContent = 0;

    var getList = document.getElementById('match-list');
    var delList = getList.firstElementChild;
    while (delList){
        getList.removeChild(delList);
        delList = getList.firstElementChild;
    }
}
