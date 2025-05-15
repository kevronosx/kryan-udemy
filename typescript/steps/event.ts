const button = document.getElementById('click-me')!;

const useName = 'Max 222';
console.log(useName);

const handler = (e: Event) => {
  console.log('boi', e.target);
};

button.addEventListener('click', handler);
