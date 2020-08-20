const container = document.querySelector('#container');
let n = prompt("Enter grid size:", "2");
n = parseInt(n);
n = Math.max(Math.min(100, n), 2);
const gridSize = 500;

let mdown = false;
let currentColor = `brown`;

for (let row = 0; row < n; row ++) {
    const span = document.createElement('span');
    span.classList.add('row');
    for (let col = 0; col < n; col ++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style['height'] = `${(gridSize)/n}px`;
        cell.style['width'] = `${(gridSize)/n}px`;
        if (col < n-1) cell.style['border-bottom'] = `0px`;
        if (row < n-1) cell.style['border-right'] = `0px`;
        cell.addEventListener('mousedown', () => mdown = true);
        cell.addEventListener('mouseup', () => mdown = false);
        cell.addEventListener('mousemove', () => {
            if (mdown) {
                cell.style['backgroundColor'] = currentColor;
            }
        })
        span.appendChild(cell);
    }
    container.appendChild(span);
}



//////////////
const buttons = document.querySelector("#buttons");
const colors = [`brown`, `black`, `blue`, `blanchedalmond`];
colors.forEach((currentValue) => {
    const button = document.createElement('button');
    button.style['background'] = currentValue;
    button.innerHTML = currentValue == `blanchedalmond` ? `erase` : currentValue;
    button.addEventListener('click', () => currentColor = currentValue);
    buttons.appendChild(button);
})

const button = document.createElement('button');
button.style['background'] = 'white';
button.innerHTML = 'clear';
button.addEventListener('click', () => {
    const list = document.getElementsByClassName('cell');
    for (const el of list) {
        el.style['background'] = 'blanchedalmond';
    }
});
buttons.appendChild(button);