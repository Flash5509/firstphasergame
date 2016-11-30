/* global game phaser game_state */
game_state.story = function() {};
game_state.story.prototype = {
    

preload: function() {
    game.load.image('sky', 'assets/sky.png');

},


create: function() {


},


update: function() {


},


}
game.state.add('main', game_state.main);
game.state.start('main');
