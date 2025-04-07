const dayDate = document.getElementById('day-date');
const now = new Date();

const optionsDay = { weekday: 'long' };
const optionsDate = {
    year : 'numeric',
    month: 'long',
    day: 'numeric'
}

   
const day= now.toLocaleDateString(undefined, optionsDay);
const date= now.toLocaleDateString(undefined, optionsDate);

dayDate.innerHTML = `${day} <br> ${date}`;