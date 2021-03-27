//get buttons
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

//get dev appear
const appearEle = document.getElementById("appear");

//create imgEle

let createImgEle = () => {
  let imgEle = document.createElement("img");
  imgEle.src = "./img/lion.png";
  imgEle.width = 100;
  imgEle.height = 100;
  let appendAppearEle = appearEle.appendChild(imgEle);
};

// let imgEle = document.createElement("img");
// imgEle.src = "./img/lion.png";
// imgEle.width = 100;
// imgEle.height = 100;
// let appendAppearEle = appearEle.appendChild(imgEle);

//set start time
let elapsedTime = 0;
document.getElementById("time").textContent = elapsedTime;

startBtn.addEventListener("click", () => {
  console.log("startBtn");
  const intervalId = setInterval(function () {
    //   createImgEle()++;
    elapsedTime++;
    //   appendAppearEle++;
    document.getElementById("time").textContent = elapsedTime;
    //:::::::add content::::::::
    //random img
    let imgEle = document.createElement("img");
    let imgNum = Math.floor(Math.random() * 3);
    //   let imgNum = Math.floor(Math.random() * 2 + 2);
    imgEle.src = `./img/${imgNum}.png`;
    console.log(imgNum);
    imgEle.width = 50;
    imgEle.height = 50;
    let appendAppearEle = appearEle.appendChild(imgEle);
    //stop timer
    stopBtn.addEventListener("click", () => {
      console.log("stopBtn");
      clearInterval(intervalId);
    });

    resetBtn.addEventListener("click", () => {
      location.reload();
    });
  }, 1000);
});
