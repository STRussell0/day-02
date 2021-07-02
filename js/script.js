// Day 2

// Primitive Values

const strings = 'yellow';
let score = 40;
const boolean = false;

const objects = {
    strings: strings,
    score: score,
    boolean: boolean,
    body: {
        style: {
            backgroundColor: 'purple',
            color: 'white'
        }
    }
}

const array = [strings, score, boolean, objects]

// document.body.style.backgroundColor = 'green';

const h1 = document.querySelector('h1');
h1.style.backgroundColor = objects.body.style.backgroundColor;
h1.style.fontSize = score + 'px';
h1.innerText = 'yellow';

// This is used to use all properties within the container objects above

// for(let style in objects.body.style) {
//     console.log(style);
//     h1.style[style] = objects.body.style[style]
// }

const values = [5 + 5, 5-3, 5*2, 5 / 2, 32 % 8];
console.log(values);

// Daily Challenge Day 2

const a = 'Supercalifragilisticexpialidocious';
const b = a.length;

const bigint = BigInt(12345123451234512345123451234512345);


console.log (b);
console.log (typeof 14);
console.log (typeof bigint);
