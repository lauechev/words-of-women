const sections = document.querySelectorAll<HTMLElement>('section');
const bodyTag = document.querySelector<HTMLElement>('body');

const addMovement = function () {
  const topViewport = window.scrollY;
  const halfHeight = window.innerHeight / 2;
  const midViewport = topViewport + halfHeight;

  //find the middle of each seciton
  sections.forEach((section, index) => {
    const topSection = section.offsetTop;
    const sectionHalfHeight = section.offsetHeight / 2;
    const midSection = topSection + sectionHalfHeight;

    //how far away is the section from the visible area of the page
    const distanceToSection = midViewport - midSection;

    //pick the tags to parallax
    const imageTag = section.querySelector('img');
    const contentTag = section.querySelector('div');

    //weight down distance
    let rotation = distanceToSection / 100;
    let contentDistance = (-1 * distanceToSection) / 2;

    //for every even section, rotate the other way
    //is the index divisible by 2? is the index's remainder 0?
    //the modulo operator 5 % 1 = 2

    if (index % 2 === 1) {
      rotation = rotation * -1;
    }

    //apply some parallax
    if (imageTag) {
      imageTag.style.transform = `rotate(${rotation}deg)`;
    }

    if (contentTag) {
      contentTag.style.top = `${contentDistance}px`;
      contentTag.style.transform = `rotate (-1 *${rotation}deg)`;
    }

    //check background color

    if (distanceToSection > -100) {
      const dataBackground = section.getAttribute('data-background') || '';
      if (bodyTag) {
        bodyTag.style.backgroundColor = dataBackground;
      }
    }
  });
};

addMovement();

document.addEventListener('scroll', function () {
  addMovement();
});

window.addEventListener('resize', function () {
  addMovement();
});
