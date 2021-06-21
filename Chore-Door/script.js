const button = document.querySelector('button');
const CurrentStreak = document.getElementById('current');
const BestStreak = document.getElementById('best');
const door = document.getElementsByClassName('door');

const image1 = "<img href='https://content.codecademy.com/projects/chore-door/images/robot.svg' alt='robot'>";
const image2 = "<img href='https://content.codecademy.com/projects/chore-door/images/beach.svg' alt='beach'>";
const image3 = "<img href='https://content.codecademy.com/projects/chore-door/images/space.svg' alt='space'>";
let sequence = [image1, image2, image3];

CurrentStreak.innerHTML = "<p>0</p>";
let doorCount = 0;



function game() {
    door.onclick = function() {
        let temp = sequence;
        let randomImg = Math.random(3);
    }
    if (temp.length === 0) {
        button.onclick = function() {
            button.innerHTML = 'Game over! <br> Try again'
    }

}

}