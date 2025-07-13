import { Scene, GameObjects } from "phaser";
import { Color } from "ui/theme";

/** Has a button that starts the game */
export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    this.add.rectangle(
      512,
      384,
      1024,
      768,
      parseInt(`0x${Color.tertiaryLight.slice(1)}`, 16),
    );

    this.add
      .text(512, 300, "RONI", {
        fontFamily: "Arial Black",
        fontSize: 64,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
      })
      .setOrigin(0.5)
      .setInteractive();
    const title = this.add
      .text(512, 460, "Main Menu", {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
      })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerover", () => {
        title.setColor("#123123");
      })
      .on("pointerout", () => {
        title.setColor("#ffffff");
      })
      .on("pointerdown", () => {
        this.scene.start("Game");
      });
  }
}
