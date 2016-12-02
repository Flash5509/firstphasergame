/* global game phaser game_state */
game_state.story = function() {};
    
game_state.story.prototype = {
    
    preload: function() {
    game.load.image('sky', 'assets/sky.png');

},


create: function() {
    game.add.sprite(0, 0, 'sky')
    		this.scoreText = game.add.text(16, 16, 'Help Billybob Cow go to the moon!\n To get him there, he must eat tacos.\nHelp him by collecting the tacos!\nYou need to get 50 tacos to get Billybob to the moon!\n Farting its way up the moon', {

			fontSize: '32px',
			fill: '#000'
		});
		this.cursors = game.input.keyboard.createCursorKeys();
},

update: function() {
    if (this.cursors.right.isDown){
        game.state.start('main')
    }

},


}
game.state.add('story', game_state.story);
game.state.start('story');
