import * as PIXI from 'pixi.js'
import config from '../config/config'
import Sample_scene from './sample_scene';

const app = new PIXI.Application({
  width: config.screenWidth,
  height: config.screenHeight,
  backgroundColor: config.backgroundColor,
  view: document.querySelector('#scene')
});

// const scene = new Sample_scene(app);
// scene.run();

// below this code, study for pixi stuffs
// see https://www.pixijselementals.com

// container
const conty = new PIXI.Container();
conty.x = 200;
conty.y = 0;
app.stage.addChild(conty);

const clampy = PIXI.Sprite.from("../assets/bunny.png");
clampy.x = 100;
clampy.y = 100;
conty.addChild(clampy);

const bigConty = new PIXI.Container();
bigConty.scale.set(2);
bigConty.position.x = 100;
bigConty.y = 200;
app.stage.addChild(bigConty);

const littleConty = new PIXI.Container();
littleConty.position = new PIXI.Point(300, 200);
bigConty.addChild(littleConty);

const particleConty = new PIXI.ParticleContainer();


// graphics
const graphy = new PIXI.Graphics();
graphy.beginFill(0xff00ff);
graphy.lineStyle(10, 0x00ff00);
graphy.drawCircle(0, 0, 100);
graphy.endFill();

app.stage.addChild(graphy);

graphy.x = 300;
graphy.y = 300;


// text
const styly = new PIXI.TextStyle({
  align: 'center',
  fill: "#754c24",
  fontSize: 42
});
const texty = new PIXI.Text('Hello World!!!', styly);
texty.position = new PIXI.Point(400, 400);
app.stage.addChild(texty);


// filters
const myBlurFilter = new PIXI.filters.BlurFilter();
clampy.filters = [myBlurFilter];


// particles
const particleContainer = new PIXI.ParticleContainer();
app.stage.addChild(particleContainer);
// todo


// Context
// class A {
//   myName = "I am A";
//   method() {
//
//   }
// }
//
// class B {
//   myName = "I am B";
//   printName() {
//     console.log(this.myName);
//   }
// }
//
// const a = new A();
// const b = new B();

// I assign a.method
// a.method = b.printName;
// a.method();     // this will print "I am A"
// b.printName();  // this will print "I am B"
//
// // this will create a new function where `b` is the `this` for that function
// a.method = b.printName.bind(b);   // --> B 클래스의 printName 이라는 함수의 this 객체를 b 클래스로 고정.
// a.method();     // this now prints "I am B"





// code split -> using Container with Sample_scene.js
const sceny = new Sample_scene(config.screenWidth, config.screenHeight);
app.stage.addChild(sceny);

class A {
  myName = 'i am A';
  method() {
    // empty
  }
}

class B {
  myName = 'i am B';
  printName() {
    console.log(this.myName);
  }
}

const a = new A();
const b = new B();

a.method = b.printName;
a.method();   // this will print 'i am A'
b.printName();

// 'this' binding
a.method = b.printName.bind(b);
a.method();   // this will print 'i am B'





















































