import { Scene } from "phaser";
import Colonel from "../objects/Colonel";
import Enemy from "../objects/Enemy";

export class Game extends Scene {
  camera!: Phaser.Cameras.Scene2D.Camera;
  floor: Phaser.GameObjects.Image;
  msg_text: Phaser.GameObjects.Text;
  colonel: Colonel;
  enemy: Enemy;

  constructor() {
    super("Game");
  }

  preload() {
    Colonel.preload(this);
    Enemy.preload(this);
    this.load.image("floor", "assets/floor.png");
  }

  create() {
    this.camera = this.cameras.main;


    this.floor = this.add.image(0, 0, "floor").setOrigin(0, 0);
    this.floor.setDisplaySize(this.camera.width, this.camera.height);

    // Create the colonel sprite
    this.colonel = new Colonel(this, 512, 384);
    this.enemy = Enemy.randomSpawn(this);

    this.input.once("pointerdown", () => {
      this.scene.start("GameOver");
    });
  }

  update() {
    this.colonel.update();

    if (this.enemy.isDead) {
      this.enemy = Enemy.randomSpawn(this);
    }

    this.enemy.update(this.colonel);
  }
}
