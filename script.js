
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

//h1.innerHTML = 'Patito <br> Feo'
h1.innerText = 'Jordan mothafucker'


//console.log(h1.getAttribute('class'))
//h1.setAttribute('class', 'rojo')

h1.classList.add('rojo')
h1.classList.remove('verde')
// h1.classList.toggle('verde')
// h1.classList.contains('verde')

input.value = '123abc'

const img =  document.createElement('img');
img.setAttribute('src', 'https://thumbs.gfycat.com/UnluckyTenseJoey-max-1mb.gif')

pid.innerHTML = ''
pid.append(img)