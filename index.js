//////////////// dark mode & light mode ////////////////

const changeModeBtn = document.getElementById("change-mode");
const modeBox = document.getElementById("mode-box");
const htmlTag = document.getElementsByTagName("html")[0];
const lightMode = document.getElementById("light-mode");
const darkMode = document.getElementById("dark-mode");
const systemPreference = document.getElementById("system-preference");

changeModeBtn.addEventListener("click", toggleModebox);

function toggleModebox() {
  modeBox.classList.toggle("lg:flex");
  modeBox.classList.toggle("lg:hidden");
}

document.addEventListener("click", hideModebox)

function hideModebox() {
  if (!modeBox.contains(event.target) && !changeModeBtn.contains(event.target)) {
    modeBox.classList.replace("lg:flex", "lg:hidden")
  }
}


darkMode.addEventListener("click", darkModeOn)
lightMode.addEventListener("click", lightModeOn)
systemPreference.addEventListener("click", systemPreferenceOn)

function darkModeOn () {
  if (htmlTag.classList.contains("light")) {
    htmlTag.classList.replace("light", "dark")
  } else {
    htmlTag.classList.add("dark")
  }
}

function lightModeOn () {
  if (htmlTag.classList.contains("dark")) {
    htmlTag.classList.replace("dark", "light")
  } else {
    htmlTag.classList.add("light")
  }
} 

function systemPreferenceOn () {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDarkScheme) {
    htmlTag.classList.remove("light")
    htmlTag.classList.add("dark")
  } else {
    htmlTag.classList.remove("dark")
    htmlTag.classList.add("light")
  }
}

//////////////////// Carrousel /////////////////////

// const previousBtn = document.querySelector("prev");
// const nextBtn = document.querySelector("next")

// let currentIndex = 1;

// function displaySlide() {
//   const items = document.getElementsByClassName(".item");
//   if (currentIndex > items.length) {
//     currentIndex = 1;
//   }
//   if (currentIndex < 1) {
//     currentIndex = items.length;
//   }

//   for (var i = 0; i < items.length; i++) {
//     items[i].style.display = 'none';
//   }

//   items[currentIndex - 1].style.display = "flex";
// }

// displaySlide(currentIndex);

// function changeSlide(n) {
//   currentIndex += n;
//   displaySlide(currentIndex);
// }

// previousBtn.addEeventListener('click', changeSlide(-1))
// nextBtn.addEeventListener('click', changeSlide(1))
