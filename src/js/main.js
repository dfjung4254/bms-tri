import * as PIXI from 'pixi.js'

const app = new PIXI.Application({
  width: 1600,
  height: 900,
  backgroundColor: 0x0000FF,
  view: document.querySelector('#scene')
});

const texture = PIXI.Texture.from('assets/bunny.png');
const bunny = new PIXI.Sprite(texture);
bunny.anchor.set(0.5);
bunny.x = 160;
bunny.y = 160;
app.stage.addChild(bunny);

app.ticker.add(delta => {
  bunny.rotation -= 0.01 * delta;
});

