const orbits = document.querySelectorAll(".orbit");

let speedMultiplier = 5;
let animationRunning = true;

const planets = [
    {orbit: document.querySelector(".mercury"), speed: 4},
    {orbit: document.querySelector(".venus"), speed: 3},
    {orbit: document.querySelector(".earth"), speed: 2.5},
    {orbit: document.querySelector(".mars"), speed: 2},
    {orbit: document.querySelector(".jupiter"), speed: 1.5},
    {orbit: document.querySelector(".saturn"), speed: 1.2},
    {orbit: document.querySelector(".uranus"), speed: 1},
    {orbit: document.querySelector(".neptune"), speed: 0.8}
];

let angles = new Array(planets.length).fill(0);

function animate(){

    if(animationRunning){

        planets.forEach((planet,index)=>{

            angles[index] += planet.speed * speedMultiplier * 0.02;

            planet.orbit.style.transform =
                `translate(-50%, -50%) rotate(${angles[index]}deg)`;

        });

    }

    requestAnimationFrame(animate);
}

animate();

document.getElementById("speedSlider")
.addEventListener("input",(e)=>{

    speedMultiplier = e.target.value;
});

function toggleAnimation(){

    animationRunning = !animationRunning;
}