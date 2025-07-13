import { Scene } from "phaser";
import Drumstick from "game/objects/Drumstick";
import Colonel from "game/objects/Colonel";
import Enemy from "game/objects/Enemy";

export class Game extends Scene {
  colonel: Colonel | undefined;
  drumstick: Drumstick | undefined;
  camera!: Phaser.Cameras.Scene2D.Camera;
  enemy: Enemy | undefined;

  constructor() {
    super("Game");
  }

  preload() {
    Colonel.preload(this);
    Drumstick.preload(this);
    Enemy.preload(this);
    this.load.image("floor", "assets/floor.png");
  }

  create() {
    this.camera = this.cameras.main;

    const floor = this.add.image(0, 0, "floor").setOrigin(0, 0);
    floor.setDisplaySize(this.camera.width, this.camera.height);

    this.colonel = new Colonel(this, 512, 384);
    // make sure drumstick doesn't spawn where colonel is
    this.drumstick = new Drumstick(
      this,
      Math.random() * this.scale.width,
      Math.random() * this.scale.height,
    );
    const overlap = this.physics.add.overlap(this.colonel, this.drumstick, () => {
      this.colonel!.armWith(this.drumstick!);
      this.drumstick!.destroy();
      this.drumstick = undefined;
      overlap.destroy();
    });
    this.enemy = Enemy.randomSpawn(this);
  }

  update() {
    this.colonel?.update();
    this.drumstick?.update();

    if (this.enemy?.isDead) {
      this.enemy = Enemy.randomSpawn(this);
    }

    if (this.colonel) {
      this.enemy?.update(this.colonel);
    }
  }
}
