console.log("classes");

class toyotaCar {
  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }
}

let fortuner = new toyotaCar();
let bmw = new toyotaCar();

console.log(fortuner);

const bmwStart = () => {
  bmw.start();
};

const bmwStop = () => {
  bmw.stop();
};