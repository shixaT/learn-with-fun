// Reading Activity: Match letters to sounds
const readingActivity = document.getElementById('reading-activity');
readingActivity.innerHTML = `
    <p>What sound does the letter "A" make?</p>
    <button onclick="alert('Correct!')">Aah</button>
    <button onclick="alert('Try again!')">Bee</button>
`;

// Writing Activity: Simple drawing canvas
const canvas = document.getElementById('writing-canvas');
const ctx = canvas.getContext('2d');
let drawing = false;

canvas.addEventListener('mousedown', () => drawing = true);
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 2, 0, Math.PI * 2);
    ctx.fill();
});

// Math Activity: Simple addition problem
const mathActivity = document.getElementById('math-activity');
mathActivity.innerHTML = `
    <p>What is 2 + 3?</p>
    <button onclick="alert('Correct!')">5</button>
    <button onclick="alert('Try again!')">4</button>
`;
