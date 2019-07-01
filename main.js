const car = document.querySelector('img');
let speed = 10;
let carX = 200;
let carY = 200;
let positionTop = car.offsetTop;
let positionLeft = car.offsetLeft;
let flag = false;
let height = window.innerHeight;
let width = window.innerWidth;
car.style.left = `${carX}px`;
car.style.top = `${carY}px`;

car.addEventListener('mousedown', () => {
  flag = !flag;
})
car.addEventListener('mousemove', (e) => {
  if (flag == true) {
    carX = e.clientX;
    carY = e.clientY;
    car.style.left = `${carX-30}px`;
    car.style.top = `${carY-50}px`;
    car.style.filter = 'brightness(0.5)';
  } else {
    car.style.filter = 'brightness(1)';
  }
});


if (positionTop === height) {
  clearInterval(interval);
  speed = 15;
}


document.addEventListener('keydown', (e) => {
  const interval = setInterval(() => {
    speed += 1;
    positionTop = car.offsetTop;
    positionLeft = car.offsetLeft;
    console.log(positionTop)
    console.log(positionLeft)
    // console.log(speed)
  }, 800);
  document.addEventListener('keyup', () => {
    clearInterval(interval);
    speed = 15;
  });


  if (e.keyCode === 40) {
    carY += speed;
    car.style.top = `${carY}px`;
    car.style.transform = 'rotateZ(180deg)';
    car.style.transition = '0.2s';
  } else if (e.keyCode === 38) {
    carY -= speed;
    car.style.top = `${carY}px`;
    car.style.transform = 'rotateZ(0deg)';
  } else if (e.keyCode === 39) {
    carX += speed;
    car.style.left = `${carX}px`;
    car.style.transform = 'rotateZ(90deg)';
  } else if (e.keyCode === 37) {
    carX -= speed;
    car.style.left = `${carX}px`;
    car.style.transform = 'rotateZ(-90deg)';
  }


  if (e.keyCode === 72) {
    alert('Game allows you to drive the car with arrows.You can also click the car and move it to choosen destination :D')
  }

})