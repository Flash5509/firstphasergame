/*global Phaser*/
var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
var game_state = {};


game_state.main = function() {};
game_state.main.prototype = {


	preload: function() {
		game.load.image('sky', 'assets/nightsky.png');
		game.load.image('ground', 'assets/platform.png');
		game.load.image('star', 'assets/taco.png');
		game.load.spritesheet('dude', 'assets/Cow.png', 123, 123);

	},

	create: function() {
		game.add.sprite(0, 0, 'sky');
		game.add.sprite(0, 0, 'star');
		
		this.platforms = game.add.group();
		this.platforms.enableBody = true;

		var ground = this.platforms.create(0, game.world.height - 30, 'ground');
		ground.scale.setTo(2, 2);
		ground.body.immovable = true;
		var ledge = this.platforms.create(-150, 450, 'ground');
		ledge.body.immovable = true;
		var ledge = this.platforms.create(-200, 300, 'ground');
		ledge.body.immovable = true;
		var ledge = this.platforms.create(650, 235, 'ground');
		ledge.body.immovable = true;
		var ledge = this.platforms.create(-250, 150, 'ground');
		ledge.body.immovable = true;
		var ledge = this.platforms.create(350, 350, 'ground');
		ledge.body.immovable = true;
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		this.player = game.add.sprite(20, game.world.height - 100, 'dude');
		game.physics.arcade.enable(this.player);
		this.player.body.bounce.y = 0.2;
		this.player.body.gravity.y = 300;
		this.player.body.collideWorldBounds = true;
		this.player.animations.add('left', [0, 1], 3, true);
		this.player.animations.add('right', [3], 3, true);
        this.player.scale.setTo(0.7, 0.7);
        this.player.body.setSize(70, 80, 20, 15)
		this.cursors = game.input.keyboard.createCursorKeys();
		this.stars = game.add.group();
		this.stars.enableBody = true; 
		
		for (var i = 0; i < 60; i++) {
			 var star = this.stars.create(i * 80, 0, 'star');
			star.body.gravity.y = 300;
			star.body.bounce.y = 0.70 + Math.random() * 0.2;
			game.debug.body(star);
			star.body.setSize(25, 25, 0, 0)
			
		}

		this.score = 0;
		this.scoreText = game.add.text(16, 16, 'score: 0', {
			fontSize: '32px',
			fill: '#000'
		});
	},
	
	
	update: function() {
		game.debug.body(this.player);
		game.physics.arcade.collide(this.stars, this.platforms);
		game.physics.arcade.collide(this.player, this.platforms);
		
		
		this.player.body.velocity.x = 0;
		if (this.cursors.left.isDown) {
			this.player.body.velocity.x = -150;

			this.player.animations.play('left');
		}
		else if (this.cursors.right.isDown) {
			this.player.body.velocity.x = 150;

			this.player.animations.play('right');
		}
		else {
			this.player.animations.stop();

			this.player.frame = 2;
		}
		if (this.cursors.up.isDown && this.player.body.touching.down) {
			this.player.body.velocity.y = -350;
		}

		game.physics.arcade.overlap(this.player, this.stars, this.collectStar, null, this);
		if (this.score >= 5){
			game.state.start('end')
		}

	},
	collectStar: function(player, star) {
		star.kill();
		this.score++;
		this.scoreText.text = this.score;
	}
};
game.state.add('main', game_state.main);
game.debug.body(this.player);