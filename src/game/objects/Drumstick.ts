import { Scene, Physics } from "phaser";

class Drumstick extends Physics.Arcade.Sprite {
  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, "drumstick", 0);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setScale(0.1);
    this.setCollideWorldBounds(true);

    this.createIdleAnimation(scene);
  }

  static preload(scene: Scene) {
    scene.load.spritesheet("drumstick", "assets/drumstick.png", {
      frameWidth: 512,
      frameHeight: 512,
    });
  }

  private createIdleAnimation(scene: Scene) {
    scene.anims.create({
      key: "idle",
      frames: scene.anims.generateFrameNumbers("drumstick", {
        start: 0,
        end: 2,
      }),
      frameRate: 4,
      repeat: -1,
    });
  }

  update() {
    this.anims.play("idle", true);
  }
}

export default Drumstick;
