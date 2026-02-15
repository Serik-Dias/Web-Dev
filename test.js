const a = [12, 33, -432, 0, 78];

const b = a.filter(n => n > 0);

const c = a.map(n => n / 2);

const d = a.reduce((x, n) => x + n, 0);

a.sort((x, y) => x - y);

// alert(a);

// alert(b);
// alert(c);
// alert(d);

const r = prompt('enter some word: ', '');

const w = r.length;
alert(w);

const w1 = r.split('');
alert(w1);