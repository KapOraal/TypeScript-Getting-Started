function startGame() {
    //starting a new game

    let playerName: string = 'Audrey';
    logPlayer(playerName);
    var messagesElement = document.getElementById('messages');
    //messagesElement! assert that messagesElement is not null
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game ...';
}

function logPlayer(name: string) {
    console.log(`New game starting for player : ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);