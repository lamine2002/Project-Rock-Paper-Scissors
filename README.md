 # Project: Rock-Paper-Scissors

## Description

This is a simple Rock-Paper-Scissors game built with HTML, CSS, and JavaScript. The game allows players to choose between rock, paper, or scissors, and then the computer randomly chooses its own selection. The winner is determined by the rules of the game, and the score is displayed on the screen. The game ends after 5 rounds, and the final winner is declared.

## Step-by-Step Explanation

### 1. HTML

The HTML file contains the basic structure of the game, including the title, the game board, and the score display. The game board consists of three buttons, one for each choice: rock, paper, and scissors. The score display shows the current score of the player and the computer.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Pierre Papier Ciseaux</title>
</head>
<body>
    <div class="container">
        <h1>Pierre Papier Ciseaux</h1>
        <div class="game">
            <div class="player">
                <h2>Joueur</h2>
                <button id="rock" class="choice">Pierre</button>
                <button id="paper" class="choice">Papier</button>
                <button id="scissors" class="choice">Ciseaux</button>
            </div>
            <div class="result">
                <h2>Résultat</h2>
                <div id="game-result"></div>
                <div id="score"></div>
            </div>
            <div class="computer">
                <h2>Ordinateur</h2>
                <div class="computer-choice" id="computer-choice"></div>
            </div>
        </div>
        <div class="final-result" id="final-result"></div>
    </div>
    <script src="game.js"></script>
</body>
</html>
```

### 2. CSS

The CSS file contains the styling for the game, including the colors, fonts,

