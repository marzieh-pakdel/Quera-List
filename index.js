const previousBtn = document.querySelector("prev");
const nextBtn = document.querySelector("next")

let currentIndex = 1;

function displaySlide() {
  const items = document.getElementsByClassName(".item");
  if (currentIndex > items.length) {
    currentIndex = 1;
  }
  if (currentIndex < 1) {
    currentIndex = items.length;
  }

  for (var i = 0; i < items.length; i++) {
    items[i].style.display = 'none';
  }

  items[currentIndex - 1].style.display = "flex";
}

displaySlide(currentIndex);

function changeSlide(n) {
  currentIndex += n;
  displaySlide(currentIndex);
}

previousBtn.addEeventListener('click', changeSlide(-1))
nextBtn.addEeventListener('click', changeSlide(1))