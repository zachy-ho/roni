import { Scene, Physics } from "phaser";

class Colonel extends Physics.Arcade.Sprite {
  cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, 'colonel', 0);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setScale(0.2);
    this.setCollideWorldBounds(true);


    this.cursors = scene.input.keyboard?.createCursorKeys();
    this.createWalkAnimations(scene);
  }

  static preload(scene: Scene) {
    scene.load.spritesheet('colonel', 'assets/colonel.png', {
      frameWidth: 230,  // make sure this matches your actual sprite dimensions
      frameHeight: 215
    });
  }

  createWalkAnimations(scene: Scene) {
    scene.anims.create({
      key: 'walk-down',
      frames: scene.anims.generateFrameNumbers('colonel', { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1
    });

    scene.anims.create({
      key: 'walk-left',
      frames: scene.anims.generateFrameNumbers('colonel', { start: 4, end: 7 }),
      frameRate: 8,
      repeat: -1
    });

    scene.anims.create({
      key: 'walk-right',
      frames: scene.anims.generateFrameNumbers('colonel', { start: 8, end: 11 }),
      frameRate: 8,
      repeat: -1
    });

    scene.anims.create({
      key: 'walk-up',
      frames: scene.anims.generateFrameNumbers('colonel', { start: 12, end: 15 }),
      frameRate: 8,
      repeat: -1
    });
  }

  update() {
    console.log('update');
    if (!this.cursors) {
      return;
    }

    const speed = 150;
    this.setVelocity(0);

    if (this.cursors.left?.isDown) {
      this.setVelocityX(-speed);
      this.anims.play('walk-left', true);
    } else if (this.cursors.right?.isDown) {
      this.setVelocityX(speed);
      this.anims.play('walk-right', true);
    } else if (this.cursors.up?.isDown) {
      this.setVelocityY(-speed);
      this.anims.play('walk-up', true);
    } else if (this.cursors.down?.isDown) {
      this.setVelocityY(speed);
      this.anims.play('walk-down', true);
    } else {
      this.anims.stop();
    }
  }
}

export default Colonel;
