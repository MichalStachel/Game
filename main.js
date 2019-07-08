const car = document.querySelector('img');
const timeText = document.querySelector('p');
const teleportText = document.getElementById('teleportText');
const btn = document.querySelector('button');
let rotate = 0;
let speed = 0;
let carX = 200;
let carY = 200;
let time = 60;
teleportCountDown = 5;
let flag = false;
let gameActive = false;
car.style.left = `${carX}px`;
car.style.top = `${carY}px`;

car.addEventListener('click', () => {
  flag = !flag;
  alert('Mouse Win!!!')
  time = -1;
})

// moving car by mouse
car.addEventListener('mousemove', (e) => {
  if (flag == true) {
    carX = e.clientX;
    carY = e.clientY;
    car.style.left = `${carX-10}px`;
    car.style.top = `${carY-30}px`;
    car.style.filter = 'brightness(0.5)';
  } else {
    car.style.filter = 'brightness(1)';
  }
});

// Timer
if (gameActive === false) {
  car.style.display = 'none';
}
btn.addEventListener('click', () => {
  time = 60;
  teleportCountDown = 5;
  gameActive = true;
  carX = 200;
  carY = 200;
  car.style.left = `${carX}px`;
  car.style.top = `${carY}px`;
  const timer = setInterval(() => {
    timeText.innerText = time;
    teleportText.innerText = `Teleports left:${teleportCountDown}`;
    if (time < 0) {
      clearInterval(timer);
      gameActive = false;
    } else if (time === 0) {
      alert('Car Win');
      gameActive = false;
      btn.style.display = 'flex';
    }
    if (gameActive === true) {
      btn.style.display = 'none';
      car.style.display = 'block';
    } else {
      btn.style.display = 'flex';
      car.style.display = 'none';
    }
    time -= 1;
    // console.log(gameActive);
  }, 1000);
})



// move car
document.addEventListener('keydown', (e) => {
  const interval = setInterval(() => {
    speed += 4;
    positionTop = car.offsetTop;
    positionLeft = car.offsetLeft;
  }, 100);
  document.addEventListener('keyup', () => {
    clearInterval(interval);
    speed = 45;
  });

  console.log(window.innerHeight, window.innerWidth)
  if (carX <= 0 || carY <= 0 || carY >= window.innerHeight - 50 || carX >= innerWidth - 100) {
    clearInterval(interval);
    speed = 0;
    alert('Mouse win')
  }


  // rotate car
  if (e.keyCode === 40) {
    carY += speed;
    rotate = 180;
    car.style.top = `${carY}px`;
    car.style.transform = `rotateZ(${rotate}deg)`;
  } else if (e.keyCode === 38) {
    carY -= speed;
    rotate = 0;
    car.style.top = `${carY}px`;
    car.style.transform = `rotateZ(${rotate}deg)`;
  } else if (e.keyCode === 39) {
    carX += speed;
    rotate = 90;
    car.style.left = `${carX}px`;
    car.style.transform = `rotateZ(${rotate}deg)`;
  } else if (e.keyCode === 37) {
    carX -= speed;
    rotate = 270;
    car.style.left = `${carX}px`;
    car.style.transform = `rotateZ(${rotate}deg)`;
  }
  // Teleport
  if (teleportCountDown <= 5 && teleportCountDown >= 1) {
    if (e.keyCode === 32) {
      let randomX = Math.floor(Math.random() * innerWidth / 1.4);
      let randomY = Math.floor(Math.random() * innerHeight / 1.4);
      console.log(randomX, randomY);
      carX = randomX;
      carY = randomY;
      car.style.left = `${carX}px`;
      car.style.top = `${carY}px`;
      console.log(e.keyCode);
      teleportCountDown -= 1;
    }
  }
  // info
  if (e.keyCode === 72) {
    alert(`Game allows you to drive the car with arrows.You can also click the car and move it to choosen destination :D
    Rules are simple catch the car with mouse.
    By pressing space car can teleport to a random destination
    Don't hit the wall or you will lose`)
  }
})