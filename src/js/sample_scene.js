import * as PIXI from "pixi.js";

class Sample_scene extends PIXI.Container {
  screenWidth;
  screenHeight;
  constructor(screenWidth, screenHeight) {
    super();

    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    this.clampy = PIXI.Sprite.from("assets/bunny.png");
    this.clampy.anchor.set(0.5);
    this.clampy.x = screenWidth / 2;
    this.clampy.y = screenHeight / 2;
    this.addChild(this.clampy);

  }

  run() {
    const texture = PIXI.Texture.from('assets/bunny.png');
    const bunny = new PIXI.Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.x = 300;
    bunny.y = 300;
    bunny.width = 100;
    bunny.height = 100;
    this.app.stage.addChild(bunny);
    this.app.ticker.add(delta => {
      bunny.rotation -= 0.01 * delta;
    });
  }

}

export default Sample_scene;