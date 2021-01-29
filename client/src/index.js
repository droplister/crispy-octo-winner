import * as Phaser from 'phaser';

function create() {
  this.add.text(0, 0, 'hello world!');
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: () => {
      console.log('test');
    },
    create,
  },
};

const game = new Phaser.Game(config);
console.log(game);
