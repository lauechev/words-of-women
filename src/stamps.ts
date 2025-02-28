let number = 0;
const stamps = ['circles.svg', 'heart.svg', 'moon.svg', 'rainbow.svg', 'shooting-star.svg', 'waves.svg'];

const stampsTag = document.querySelector<HTMLDivElement>('div.stamps');

const addStamp = function (x: number, y: number) {
  const img = document.createElement('img');
  img.setAttribute('src', stamps[number]);

  //remove half window width
  img.style.left = x - window.innerWidth / 2 + 'px';
  img.style.top = y + 'px';

  stampsTag?.appendChild(img);

  //add some audio
  const audio = document.createElement('audio');
  audio.setAttribute('src', 'plop.mp3');
  audio.play();

  number++;

  if (number > stamps.length - 1) {
    number = 0;
  }
};

document.addEventListener('click', function (event) {
  addStamp(event.pageX, event.pageY);
});
