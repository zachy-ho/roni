import { Scene } from "phaser";

class Colonel extends Phaser.GameObjects.Sprite {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y, 'colonel');

    }

    static preload(scene: Scene) {
        scene.load.spritesheet('colonel', 'assets/colonel.png', {
            frameWidth: 230,
            frameHeight: 215
        });
    }
    
    createWalk(scene: Scene) {
        scene.anims.create({
            key: 'walk',
            frames: scene.anims.generateFrameNumbers('colonel', { start: 4, end: 7 }),
            frameRate: 8,
            repeat: -1
        });
    }
}

export default Colonel;
