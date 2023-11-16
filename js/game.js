// Course: SENG 513
// Date: Nov 16, 2023
// Assignment 3
// Name: Jessica Tran
// UCID: 30089544

// Load Event - Is fired when the whole page has loaded, including all dependant resources, such as stylesheets and images
window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 1280;
  canvas.height = 720;

  // Input Handler: Keeps track of keyboard keys as they are being pressed and released by the user
  class InputHandler {
    constructor(game) {
      this.game = game;
      
      // _____Event listener for WASD keys - PRESSED_____
      window.addEventListener("keydown", (e) => {
        if (e.key == "w" || e.key == "a" || e.key == "s" || e.key == "d") {
          this.game.lastKey1 = 'P' + e.key;
           console.log(this.game.lastKey1);
        }
      });
      
      // _____Event listener for WASD keys - RELEASED
      window.addEventListener("keyup", (e) => {
        if (e.key == "w" || e.key == "a" || e.key == "s" || e.key == "d") {
          this.game.lastKey1 = 'R' + e.key;
           console.log(this.game.lastKey1);
        }
      });
      
      // _____Event listener for ARROW keys - PRESSED_____
      window.addEventListener("keydown", (e) => {        
        if (e.key == "ArrowUp" || e.key == "ArrowLeft" || e.key == "ArrowDown" || e.key == "ArrowRight") {
          this.game.lastKey2 = 'P' + e.key;
          console.log(this.game.lastKey2);
        }
      });
      
      // _____Event listener for ARROW keys - RELEASED
      window.addEventListener("keyup", (e) => {
        if (e.key == "ArrowUp" || e.key == "ArrowLeft" || e.key == "ArrowDown" || e.key == "ArrowRight") {
          this.game.lastKey2 = 'R' + e.key;
           console.log(this.game.lastKey2);
        }
      });
      
    }
  }

  class Cat1 {
    constructor(game) {
      this.game = game;
      this.spriteWidth = 500;
      this.spriteHeight = 500;
      this.frameX = 0;
      this.frameY = 0;
      this.maxFrame = 1;
      this.width = 200;
      this.height = 200;
      this.x = 50;
      this.y = 200;
      this.speedX = 0;
      this.speedY = 0;
      this.maxSpeed = 5;
      this.image = document.getElementById('cat1');
      this.fps = 2;
      this.frameInterval = 1000/this.fps;
      this.frameTimer = 0;
    }
    
    draw(context) {
      // context.fillRect(this.x, this.y, this.width, this.height);
      context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
    
    setSpeed(speedX, speedY) {
      this.speedX = speedX;
      this.speedY = speedY;
    }
    
    update(deltaTime) {
      if (this.game.lastKey1 == "Pw") {
        this.setSpeed(0, -this.maxSpeed * 0.8);
        this.frameY = 1;
      }
      else if (this.game.lastKey1 == "Rw" && this.speedY < 0) {
        this.setSpeed(0, 0);
        this.frameY = 0;
      }
      else if (this.game.lastKey1 == "Ps") {
        this.setSpeed(0, this.maxSpeed * 0.8);
        this.frameY = 1;
      }
      else if (this.game.lastKey1 == "Rs" && this.speedY > 0) {
        this.setSpeed(0, 0);
        this.frameY = 0;
      }
      else if (this.game.lastKey1 == "Pa") {
        this.setSpeed(-this.maxSpeed, 0);
        this.frameY = 3;
      }
      else if (this.game.lastKey1 == "Ra" && this.speedX < 0) {
        this.setSpeed(0, 0);
        this.frameY = 2;
      }
      else if (this.game.lastKey1 == "Pd") {
        this.setSpeed(this.maxSpeed, 0);
        this.frameY = 1;
      }
      else if (this.game.lastKey1 == "Rd" && this.speedX > 0) {
        this.setSpeed(0, 0);
        this.frameY = 0;
      }

      this.x += this.speedX;
      this.y += this.speedY;
      
      // Horizontal Boundaries
      if (this.x < 0) {
        this.x = 0;
      }
      else if (this.x > this.game.width - this.width) {
        this.x = this.game.width - this.width;
      }
      
      // Vertical Boundaries
      if (this.y < this.game.topMargin) {
        this.y = this.game.topMargin;
      }
      else if (this.y > this.game.height - this.height) {
        this.y = this.game.height - this.height;
      }
      
      // Sprite Animation
      if (this.frameTimer > this.frameInterval) {
        if (this.frameX < this.maxFrame) {
          this.frameX++;
        } 
        else {
          this.frameX = 0;
        }
        this.frameTimer = 0;
      }
      else {
        this.frameTimer += deltaTime;
      }
    }
  }

  class Cat2 {
    constructor(game) {
      this.game = game;
      this.spriteWidth = 500;
      this.spriteHeight = 500;
      this.frameX = 0;
      this.frameY = 0;
      this.maxFrame = 1;
      this.width = 200;
      this.height = 200;
      this.x = 50;
      this.y = 350;
      this.speedX = 0;
      this.speedY = 0;
      this.maxSpeed = 5;
      this.image = document.getElementById('cat2');
      this.fps = 2;
      this.frameInterval = 1000/this.fps;
      this.frameTimer = 0;
    }
    
    draw(context) {
      // context.fillRect(this.x, this.y, this.width, this.height);
      context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
    
    setSpeed(speedX, speedY) {
      this.speedX = speedX;
      this.speedY = speedY;
    }
    
    update(deltaTime) {
      if (this.game.lastKey2 == "PArrowUp") {
        this.setSpeed(0, -this.maxSpeed * 0.8);
        this.frameY = 1;
      }
      else if (this.game.lastKey2 == "RArrowUp" && this.speedY < 0) {
        this.setSpeed(0, 0);
        this.frameY = 0;
      }
      else if (this.game.lastKey2 == "PArrowDown") {
        this.setSpeed(0, this.maxSpeed * 0.8);
        this.frameY = 1;
      }
      else if (this.game.lastKey2 == "RArrowDown" && this.speedY > 0) {
        this.setSpeed(0, 0);
        this.frameY = 0;
      }
      else if (this.game.lastKey2 == "PArrowLeft") {
        this.setSpeed(-this.maxSpeed, 0);
        this.frameY = 3;
      }
      else if (this.game.lastKey2 == "RArrowLeft" && this.speedX < 0) {
        this.setSpeed(0, 0);
        this.frameY = 2;
      }
      else if (this.game.lastKey2 == "PArrowRight") {
        this.setSpeed(this.maxSpeed, 0);
        this.frameY = 1;
      }
      else if (this.game.lastKey2 == "RArrowRight" && this.speedX > 0) {
        this.setSpeed(0, 0);
        this.frameY = 0;
      }
      
      this.x += this.speedX;
      this.y += this.speedY;
      
      // Horizontal Boundaries
      if (this.x < 0) {
        this.x = 0;
      }
      else if (this.x > this.game.width - this.width) {
        this.x = this.game.width - this.width;
      }
      
      // Vertical Boundaries
      if (this.y < this.game.topMargin) {
        this.y = this.game.topMargin;
      }
      else if (this.y > this.game.height - this.height) {
        this.y = this.game.height - this.height;
      }
      
      // Sprite Animation
      if (this.frameTimer > this.frameInterval) {
        if (this.frameX < this.maxFrame) {
          this.frameX++;
        } 
        else {
          this.frameX = 0;
        }
        this.frameTimer = 0;
      }
      else {
        this.frameTimer += deltaTime;
      }
    }
  }

  class Object {
    constructor(game) {
      this.game = game;
    }
    
    draw(context) {
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update() {
      // ...
    }
  }
  
  class Gem extends Object {
    constructor(game) {
      super(game);
      this.game = game;
      this.imageWidth = 100;
      this.imageHeight = 100;
      this.width = this.imageWidth;
      this.height = this.imageHeight;
      this.x = Math.random() * this.game.width - this.width;
      this.y = this.game.topMargin + Math.random() * (this.game.height - this.height - this.game.topMargin);
      
      this.i = 0;
      this.collision = 0; // 0 = false and 1 = true
    }

    randomizeGemLocation() {
      this.x = Math.random() * this.game.width - this.width;
      this.y = this.game.topMargin + Math.random() * (this.game.height - this.height - this.game.topMargin);
    }
  }

  class Gem1 extends Gem {
    constructor(game) {
      super(game);
      this.image = document.getElementById("gem1");
    }
  }

  class Gem2 extends Gem {
    constructor(game) {
      super(game);
      this.image = document.getElementById("gem2");
    }
  }

  class Gem3 extends Gem {
    constructor(game) {
      super(game);
      this.image = document.getElementById("gem3");
    }
  }

  class Gem4 extends Gem {
    constructor(game) {
      super(game);
      this.image = document.getElementById("gem4");
    }
  }

  class Gem5 extends Gem {
    constructor(game) {
      super(game);
      this.image = document.getElementById("gem5");
    }
  }

  class Gem6 extends Gem {
    constructor(game) {
      super(game);
      this.image = document.getElementById("gem6");
    }
  }
  
  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      
      this.topMargin = 150;
      
      this.lastKey1 = undefined;
      this.lastKey2 = undefined;
      
      this.input = new InputHandler(this);
      
      this.cat1 = new Cat1(this);
      this.cat2 = new Cat2(this);

      this.gem1 = new Gem1(this);
      this.gem2 = new Gem2(this);
      this.gem3 = new Gem3(this);
      this.gem4 = new Gem4(this);
      this.gem5 = new Gem5(this);
      this.gem6 = new Gem6(this);

      this.gems = []
      this.sleep = 100; // Wait this long before changing gem location

      this.gameObjects = [];
      this.score = 0;
    }

    // _____CUSTOM ALGORITHM_____
    updateGemLocation() {
      this.gems = [this.gem1, this.gem2, this.gem3, this.gem4, this.gem5, this.gem6];

      this.gems.forEach(gem => {
        if (gem.collision != 1) {
          if (gem.i == this.sleep) {
            gem.i = 0;
            gem.randomizeGemLocation();
          }
          else {
            gem.i += 1;
          }
        }
      });
    }

    checkCollision(a, b) {
      const dx = (a.x + 100) - (b.x + 50);
      const dy = (a.y + 100) - (b.y + 50);
      const distance = Math.hypot(dy, dx);
      const sumOfRadii = 75;
      return (distance < sumOfRadii);
    }

    checkCollisionStatements() {
      if ((!this.checkCollision(this.cat1, this.gem1)) && (!this.checkCollision(this.cat2, this.gem1))) {
        this.gameObjects.push(this.gem1);
      }
      else {
        this.gem1.x = 1200;
        this.gem1.y = 5;
        this.gem1.width = 50;
        this.gem1.height = 50;
        this.gem1.collision = 1;
        this.score += 1;
      }

      if ((!this.checkCollision(this.cat1, this.gem2)) && (!this.checkCollision(this.cat2, this.gem2))) {
        this.gameObjects.push(this.gem2);
      }
      else {
        this.gem2.x = 1175;
        this.gem2.y = 5;
        this.gem2.width = 50;
        this.gem2.height = 50;
        this.gem2.collision = 1;
        this.score += 1;
      }

      if ((!this.checkCollision(this.cat1, this.gem3)) && (!this.checkCollision(this.cat2, this.gem3))) {
        this.gameObjects.push(this.gem3);
      }
      else {
        this.gem3.x = 1150;
        this.gem3.y = 5;
        this.gem3.width = 50;
        this.gem3.height = 50;
        this.gem3.collision = 1;
        this.score += 1;
      }

      if ((!this.checkCollision(this.cat1, this.gem4)) && (!this.checkCollision(this.cat2, this.gem4))) {
        this.gameObjects.push(this.gem4);
      }
      else {
        this.gem4.x = 1125;
        this.gem4.y = 5;
        this.gem4.width = 50;
        this.gem4.height = 50;
        this.gem4.collision = 1;
        this.score += 1;
      }

      if ((!this.checkCollision(this.cat1, this.gem5)) && (!this.checkCollision(this.cat2, this.gem5))) {
        this.gameObjects.push(this.gem5);
      }
      else {
        this.gem5.x = 1100;
        this.gem5.y = 5;
        this.gem5.width = 50;
        this.gem5.height = 50;
        this.gem5.collision = 1;
        this.score += 1;
      }

      if ((!this.checkCollision(this.cat1, this.gem6)) && (!this.checkCollision(this.cat2, this.gem6))) {
        this.gameObjects.push(this.gem6);
      }
      else {
        this.gem6.x = 1075;
        this.gem6.y = 5;
        this.gem6.width = 50;
        this.gem6.height = 50;
        this.gem6.collision = 1;
        this.score += 1;
      }
    }

    render(context, deltaTime) {

      // this.gameObjects = [this.cat1, this.cat2, this.gem1, this.gem2, this.gem3, this.gem4, this.gem5, this.gem6];
      this.gameObjects = [this.cat1, this.cat2];

      this.updateGemLocation();
      this.checkCollisionStatements();

      this.gameObjects.sort((a,b) => {
        return (a.y + a.height) - (b.y + b.height);
      });
      this.gameObjects.forEach(object => {
        object.draw(context);
        object.update(deltaTime);
      });
    }

  }

  const game = new Game(canvas.width, canvas.height);
  let lastTime = 0;
  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    game.render(ctx, deltaTime);
    requestAnimationFrame(animate);

    if (game.score == 6) {
      document.body.style.opacity = 0;
      setTimeout(function() {
        window.location.href = 'cutscene-3.html';
      }, 1000);
    } 
    
  }
  animate(0);
});