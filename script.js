const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ012345678&9@#$%きちみヌルの+ナ*()_+{}:"<>?[]ユ;\',./^`~';
const charactersArray = characters.split('');
const fontSize = 12;
const columns = canvas.width / fontSize;

let drops = [];

// Initialize the drops array
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

// 执行代码雨效果
setInterval(draw, 33);

// 2秒后显示欢迎文字
setTimeout(() => {
    document.getElementById('welcome').style.opacity = 1;
}, 2000);

// 自适应窗口大小
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const newColumns = Math.floor(canvas.width / fontSize);
    while (drops.length < newColumns) drops.push(1);
    while (drops.length > newColumns) drops.pop();
});
