const colorWheel = document.getElementById('color-wheel');
const body = document.getElementById('body');

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
colorWheel.addEventListener('click', function (){
    const newColor = getRandomColor();
    body.style.backgroundColor = newColor;
    
})
