import { Scene } from "phaser";
import Colonel from "../characters/Colonel";

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  msg_text: Phaser.GameObjects.Text;
  colonel: Colonel;

  constructor() {
    super("Game");
  }

  preload() {
    Colonel.preload(this);
  }

  create() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(0x00ff00);

    this.background = this.add.image(512, 384, "background");
    this.background.setAlpha(0.5);

    // Create the colonel sprite
    this.colonel = new Colonel(this, 512, 384);
    this.add.existing(this.colonel);
    this.colonel.setScale(0.2);
    
    // Create the walking animation
    this.colonel.createWalk(this);

    // Start the walking animation
    this.colonel.play('walk');

    this.input.once("pointerdown", () => {
      this.scene.start("GameOver");
    });
  }
}
