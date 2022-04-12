class Menu extends Phaser.Scene {
  constructor() {
    super("menuScene");
  }
  preload() {
    // load audio
    this.load.audio('sfx_select', './assets/blip_select12.wav');
    this.load.audio('sfx_explosion', './assets/explosion38.wav');
    this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    this.load.audio('bgm', './assets/sharkbackground.mp3');

    this.load.image('bg', './assets/startbg.png');
    this.load.image('gamestart', './assets/gamestart.png');
    this.load.image('tittle', './assets/tittle.png');
    this.load.image('fisheat', './assets/fisheat.png');
    this.load.image('word', './assets/word.png');
    this.load.image('tittleshark', './assets/sharkontittle.png');

  }
  create() {
    //menu text configration
    let menuConfig = {
      fontFamily: 'Courier',
      fontSize: '28px',
      backgroundColor: '#F3B141',
      color: '#843605',
      align: 'right',
      padding: {
      top: 5,
      bottom: 5,
      },
      fixedWidth: 0
  }

  //show menu image
  
  this.add.sprite(0,0,'bg').setOrigin(0,0);
  this.add.sprite(200,130,'fisheat').setOrigin(0,0);
  this.add.sprite(50,330,'word').setOrigin(0,0);
  this.add.sprite(200,30,'tittle').setOrigin(0,0);

  //sound 
  let soundSample = this.sound.add('bgm');
  soundSample.loop=true;
  soundSample.play();

  
 // this.add.sprite(0,0,'fisheat').setOrigin(0,0);


  
  // define keys
  keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
  keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);


  
  }


  


  update() {
    if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
      // easy mode
      game.settings = {
        spaceshipSpeed: 3,
        gameTimer: 600    
      }
      this.sound.play('sfx_select');
      this.scene.start('playScene');    
    }
    if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
      // hard mode
      game.settings = {
        spaceshipSpeed: 4,
        gameTimer: 450    
      }
      this.sound.play('sfx_select');
      this.scene.start('playScene');    
    }
  }
  
}


//