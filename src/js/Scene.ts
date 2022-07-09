import {Container, Point, Sprite, Ticker} from "pixi.js";

export class Scene extends Container {

  private readonly screenWidth: number;
  private readonly screenHeight: number;

  private clampy: Sprite;
  private clampyVelocity: number = 5;

  constructor(screenWidth: number, screenHeight: number) {
    super();

    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    this.clampy = Sprite.from('../assets/bunny.png');
    this.clampy.anchor.set(0.5);
    this.clampy.position = new Point(screenWidth / 2, screenHeight / 2);
    this.addChild(this.clampy);

    Ticker.shared.add(this.update.bind(this));

  }

  private update(deltaTime: number): void {
    this.clampy.x = this.clampy.x + this.clampyVelocity * deltaTime;
    this.clampy.rotation += deltaTime * 0.05;

    if(this.clampy.x > this.screenWidth) {
      this.clampy.x = 0;
    }

  }


}