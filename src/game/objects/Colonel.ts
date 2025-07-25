import { Scene, Physics } from "phaser";
import type { Weapon } from "./Weapon";

class Colonel extends Physics.Arcade.Sprite {
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
  private weapon: Weapon | undefined;

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, "colonel", 0);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setScale(0.2);
    this.setCollideWorldBounds(true);

    this.cursors = scene.input.keyboard?.createCursorKeys();
    this.createWalkAnimations(scene);
  }

  static preload(scene: Scene) {
    scene.load.spritesheet("colonel", "assets/colonel.png", {
      frameWidth: 256,
      frameHeight: 256,
    });
  }

  private createWalkAnimations(scene: Scene) {
    scene.anims.create({
      key: "walk-down",
      frames: scene.anims.generateFrameNumbers("colonel", { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1,
    });

    scene.anims.create({
      key: "walk-left",
      frames: scene.anims.generateFrameNumbers("colonel", { start: 4, end: 7 }),
      frameRate: 8,
      repeat: -1,
    });

    scene.anims.create({
      key: "walk-right",
      frames: scene.anims.generateFrameNumbers("colonel", {
        start: 8,
        end: 11,
      }),
      frameRate: 8,
      repeat: -1,
    });

    scene.anims.create({
      key: "walk-up",
      frames: scene.anims.generateFrameNumbers("colonel", {
        start: 12,
        end: 15,
      }),
      frameRate: 8,
      repeat: -1,
    });
  }

  update() {
    if (!this.cursors) {
      return;
    }

    const speed = 150;
    this.setVelocity(0);

    // TODO: fix the spritesheets for all directions
    if (this.cursors.left?.isDown) {
      this.setVelocityX(-speed);
      this.anims.play("walk-down", true);
    } else if (this.cursors.right?.isDown) {
      this.setVelocityX(speed);
      this.anims.play("walk-down", true);
    } else if (this.cursors.up?.isDown) {
      this.setVelocityY(-speed);
      this.anims.play("walk-down", true);
    } else if (this.cursors.down?.isDown) {
      this.setVelocityY(speed);
      this.anims.play("walk-down", true);
    } else {
      this.anims.stop();
    }
  }

  armWith(weapon: Weapon) {
    this.weapon = weapon;
  }
}

export default Colonel;
