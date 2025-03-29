

const colorPallet = document.querySelector('.color-pallets');
const greenPallet = ['#F1F5D8', '#D6FFC1', '#B9FFAF', '#97FA9A', '#8AF0BF'];
const bluePallet = ['#EFEFEF', '#B1E6F3', '#72DDF7', '#79B8F4', '#8093F1'];
const tealPallet = ['#006767', '#008080', '#279E9D', '#4EBCBA', '#75DAD7'].reverse();
const redPallet = ['#EC5353', '#EE7272', '#F09191', '#F2B0B0', '#F3CFCE'].reverse();
const brownPallet = ['#E7C6A2', '#D3B392', '#BFA081', '#BF9675', '#966548'];
const yellowPallet = ['#FFD000', '#F9DC5C', '#FAE588', '#FCEFB4', '#FDF8E1'].reverse();
const orangePallet = ['#FD9A4D', '#FCB274', '#FBCA9A', '#FCDFAA', '#FCF3B9'].reverse();


colorPallet.innerHTML = `
    <h2>Color Pallets</h2>
    <h3>Green</h3>
    <ul>
        ${greenPallet.map(color => `<li style="background-color: ${color};" data-color="${color}">${color}</li>`).join('')}
    </ul>
    <h3>Blue</h3>
    <ul>
        ${bluePallet.map(color => `<li style="background-color: ${color};" data-color="${color}">${color}</li>`).join('')}
    </ul>
    <h3>Teal</h3>
    <ul>
        ${tealPallet.map(color => `<li style="background-color: ${color};" data-color="${color}">${color}</li>`).join('')}
    </ul>
    <h3>Red</h3>
    <ul>
        ${redPallet.map(color => `<li style="background-color: ${color};" data-color="${color}">${color}</li>`).join('')}
    </ul>
    <h3>Brown</h3>
    <ul>
        ${brownPallet.map(color => `<li style="background-color: ${color};" data-color="${color}">${color}</li>`).join('')}
    </ul>
    <h3>Yellow</h3>
    <ul>
        ${yellowPallet.map(color => `<li style="background-color: ${color};" data-color="${color}">${color}</li>`).join('')}
    </ul>
    <h3>Orange</h3>
    <ul>
        ${orangePallet.map(color => `<li style="background-color: ${color};" data-color="${color}">${color}</li>`).join('')}
    </ul>
`;

document.querySelectorAll('.color-pallets li').forEach(item => {
    item.addEventListener('click', function () {
        const color = this.dataset.color;
        navigator.clipboard.writeText(color).then(() => {
            alert(`Copied: ${color}`);
        }).catch(err => console.error('Failed to copy text: ', err));
    });
});