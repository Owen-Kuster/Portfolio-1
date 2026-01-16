const alBox = document.getElementById('albronBox');
const jumboBox = document.getElementById('jumboBox');
const albertBox = document.getElementById('albertBox');

function toggleWork(textId, imageId) {
  const text = document.getElementById(textId);
  const image = document.getElementById(imageId);

  text.classList.toggle('open');
  image.classList.toggle('open');
}

alBox.addEventListener('click', () => {
  toggleWork('work-txt-albron', 'albron-image');
});

jumboBox.addEventListener('click', () => {
  toggleWork('work-txt-jumbo', 'jumbo-image-yellow');
});

albertBox.addEventListener('click', () => {
  toggleWork('work-txt-albert', 'albert-image-blue');
});
