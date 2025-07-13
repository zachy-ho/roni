import { Scene, Physics } from "phaser";
import Colonel from "./Colonel";

class Enemy extends Physics.Arcade.Sprite {

  isDead: boolean = false;

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, 'enemy', 0);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setScale(0.2);
    this.setCollideWorldBounds(true);
    this.createWalkAnimations(scene);
    this.anims.play('enemy-walk', true);
  }

  static randomSpawn(scene: Scene) {
    const x = Math.random() * scene.cameras.main.width;
    const y = Math.random() * scene.cameras.main.height;
    return new Enemy(scene, x, y);
  }

  static preload(scene: Scene) {
    scene.load.spritesheet('enemy', 'assets/enemy_1.png', {
      frameWidth: 256,
      frameHeight: 320
    });
  }

  update(colonel: Colonel) {
    const xDistance = colonel.x - this.x;
    const yDistance = colonel.y - this.y;

    if (xDistance < 1 && yDistance < 1) {
      this.destroy();
      this.isDead = true;
      return;
    }

    this.setVelocityX(xDistance > 0 ? 50 : -50);
    this.setVelocityY(yDistance > 0 ? 50 : -50);

    return;
  }

  createWalkAnimations(scene: Scene) {
    scene.anims.create({
      key: 'enemy-walk',
      frames: scene.anims.generateFrameNumbers('enemy', { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1
    });
  }
}


export default Enemy;
