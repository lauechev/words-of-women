const headerTag = document.querySelector<HTMLElement>('header');

//when we scroll the page at a certain point, toggle a class to the header.
const toggleHeader = function () {
  const pixels = window.scrollY;

  if (pixels > 60) {
    headerTag?.classList.add('scrolled');
  } else {
    headerTag?.classList.remove('scrolled');
  }
};

toggleHeader();

document.addEventListener('scroll', function () {
  toggleHeader();
});
