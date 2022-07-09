import {Application} from "pixi.js";
import config from '../config/config'
import {Scene} from "./Scene";

const app = new Application({
  view: document.getElementById('scene') as HTMLCanvasElement,
  width: config.screenWidth,
  height: config.screenHeight,
  backgroundColor: config.backgroundColor,
  autoDensity: true,
  resolution: window.devicePixelRatio || 1
});

const sceny = new Scene(config.screenWidth, config.screenHeight);

app.stage.addChild(sceny);

