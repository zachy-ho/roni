import { Scene, GameObjects } from "phaser";
import { Color } from "ui/theme";

/** Has a button that starts the game */
export class MainMenu extends Scene {
  title: GameObjects.Text;
  background: GameObjects.Rectangle;

  constructor() {
    super("MainMenu");
  }

  create() {
    this.background = this.add.rectangle(
      512,
      384,
      1024,
      768,
      Number(`0x${Color.tertiaryLight}`),
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
    this.title = this.add
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
        this.title.setColor("#123123");
      })
      .on("pointerout", () => {
        this.title.setColor("#ffffff");
      });
  }
}
