const car = document.getElementById("car");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const backButton = document.getElementById("back");

let interval = null; 
let speed = 15;
function moveCar(direction) {
    stopCar();

    interval = setInterval(() => {
        let currentLeft = parseInt(car.style.left) || 0; 
        if (direction === "forward") {
            currentLeft += speed;
            
        } else if (direction === "backward") {
            currentLeft -= speed;
            
        }

        car.style.left = currentLeft + "px";
    }, 50);
}


function stopCar() {
    clearInterval(interval); 
    interval = null; 
}
startButton.addEventListener("click", () => moveCar("forward"));
backButton.addEventListener("click", () => moveCar("backward"));
stopButton.addEventListener("click", stopCar);
