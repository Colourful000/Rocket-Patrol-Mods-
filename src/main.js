
let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);
// set UI sizes
let borderUISize = game.config.height / 15; //32
let borderPadding = borderUISize / 3; //5
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

//Name Yicheng Xiang 
//Project tittle :Feeding Frenzy
//DATE: 4/17/2022
//How long it took to complete the project:20 hours 


//
//Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
//Create 4 new explosion SFX and randomize which one plays on impact (10)
//Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20) 
//Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
//Replace the UI borders with new artwork (10)
//Create a new animated sprite for the Spaceship enemies (10)
//Create a new title screen (e.g., new artwork, typography, layout) (10)
//Add your own (copyright-free) background music to the Play scene (5)
//Create a new scrolling tile sprite for the background (5)