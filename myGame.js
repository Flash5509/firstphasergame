/*global Phaser*/


var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
var game_state = {}


game_state.main = function() {};
game_state.main.prototype = {


    preload: function() {
        
        game.load.image('sky', 'assets/sky.png');
        game.load.image('ground', 'assets/platform.png');
        game.load.image('star', 'assets/star.png');
        game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
        
        
    },


    create: function() {
        
        game.add.sprite(0, 0, 'sky');
        game.add.sprite(0, 0, 'star');
        
        this.platform = game.add.group();
        this.platform.enableBody = true;
        this.platform.create(200, 200, 'ground');
        
        this.player = game.add.sprite(32, game.world.height - 150, 'dude');
        
        this.player.body.bounce.y = 0.5;
        this.player.body.bounce.y = 440;
        this.player.body.collideWorldBounds = true
        
        this.player.animations.add('left', [0,1,2,3], 10, true);
        this.player.animations.add('right', [5,6,7,8], 10, true);
        
        
    },


    update: function() {
        game.physics.arcade.enable(this.player, this.platform);

    },


}
game.state.add('main', game_state.main);
game.state.start('main');
