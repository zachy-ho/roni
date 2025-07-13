import { Scene, GameObjects } from "phaser";
import { Color } from "ui/theme";

/** Has a button that starts the game */
export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    this.add.rectangle(
      this.scale.width / 2,
      this.scale.height / 2,
      this.scale.width,
      this.scale.height,
      parseInt(`0x${Color.tertiaryLight.slice(1)}`, 16),
    );

    this.add
      .text(this.scale.width / 2, 300, "RONI", {
        fontFamily: "Arial Black",
        fontSize: 64,
        color: Color.primary,
        stroke: "#000000",
        strokeThickness: 8,
      })
      .setOrigin(0.5)
      .setInteractive();
    const title = this.add
      .text(this.scale.width / 2, 460, "Main Menu", {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
      })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerover", () => {
        title.setColor(Color.primary);
      })
      .on("pointerout", () => {
        title.setColor("#ffffff");
      })
      .on("pointerdown", () => {
        this.scene.start("Game");
      });
  }
}
