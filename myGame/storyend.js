/* global game phaser game_state */
game_state.storyend = function() {};
    
game_state.storyend.prototype = {
    
    preload: function() {
    game.load.image('sky', 'assets/nightsky.png');

},
create: function() {
    game.add.sprite(0, 0, 'sky')
		this.scoreText = game.add.text(16, 16, 'TO THE MOON! *farts* \nBillybob Cow has gone to the moon.\nHe has achieved his dreams!', {
			fontSize: '32px',
			fill: '#000'
		});
},
update: function() {
    }

},
game.state.add('end', game_state.storyend);