# Input Handling (game.js):
- The InputHandler class manages keyboard input, specifically tracking the WASD and arrow keys. It utilizes event listeners for keydown and keyup events to update the lastKey1 and lastKey2 properties in the game object, indicating the most recent key press or release.

# Cat Movement and Animation (game.js):
- The Cat1 and Cat2 classes represent two cat characters in the game. The update method in each class governs the cat's movement based on user input (WASD or arrow keys), updating the position, speed, and sprite animation. The frameX and frameY properties control the sprite animation, allowing for smooth transitions between different frames.

# Gem Generation and Collision Handling (game.js):
- The Gem class and its subclasses (Gem1 to Gem6) are responsible for representing different types of gems in the game. The updateGemLocation method in the Game class manages the randomization of gem locations over time. The checkCollision method determines if there is a collision between a cat and a gem, and the checkCollisionStatements method updates the game state accordingly, handling gem collection and scoring.