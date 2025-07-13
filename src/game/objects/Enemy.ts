import { Scene, Physics } from "phaser";

class Enemy extends Physics.Arcade.Sprite {
  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, 'enemy', 0);
    scene.add.existing(this);
    scene.physics.add.existing(this);
  }

  static preload(scene: Scene) {
    scene.load.spritesheet('enemy', 'assets/enemy.png', {
      frameWidth: 256,
      frameHeight: 256
    });
  }
}

export default Enemy;
