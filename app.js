const container = document.querySelector('.container');

const monUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for(let i = 1; i <= 152; i++){
    var poke = document.createElement('div');
    var newMon = document.createElement('img');
    newMon.src = `${monUrl}${i}.png`;
    var num = document.createElement('span');
    num.innerText = `No. ${i}`;
    poke.appendChild(newMon);
    poke.appendChild(num);
    poke.classList.add('pokemon');
    container.appendChild(poke);
}