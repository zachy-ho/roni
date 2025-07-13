import { Scene } from "phaser";
import Drumstick from "game/objects/Drumstick";
import Colonel from "game/objects/Colonel";

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera | undefined;
  colonel: Colonel | undefined;
  drumstick: Drumstick | undefined;

  constructor() {
    super("Game");
  }

  preload() {
    Colonel.preload(this);
    Drumstick.preload(this);
    this.load.image("floor", "assets/floor.png");
  }

  create() {
    this.camera = this.cameras.main;

    const floor = this.add.image(0, 0, "floor").setOrigin(0, 0);
    floor.setDisplaySize(this.camera.width, this.camera.height);

    // Create the colonel sprite
    this.colonel = new Colonel(this, 512, 384);
    this.drumstick = new Drumstick(this, 0, 0);
  }

  update() {
    this.colonel?.update();
    this.drumstick?.update();
  }
}
