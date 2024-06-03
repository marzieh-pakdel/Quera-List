//////////////// dark mode & light mode ////////////////

const changeModeBtn = document.getElementById("change-mode");
const modeBox = document.getElementById("mode-box");
const htmlTag = document.getElementsByTagName("html")[0];
const lightMode = document.getElementById("light");
const darkMode = document.getElementById("dark");
const systemPreference = document.getElementById("system-preference");
const systemPreferenceMode = "system-preference";

changeModeBtn.addEventListener("click", toggleModebox);

function toggleModebox() {
  modeBox.classList.toggle("lg:flex");
  modeBox.classList.toggle("lg:hidden");
}

document.addEventListener("click", hideModebox);

function hideModebox(event) {
  if (
    !modeBox.contains(event.target) &&
    !changeModeBtn.contains(event.target)
  ) {
    modeBox.classList.replace("lg:flex", "lg:hidden");
  }
}

function setTheme(theme) {
  htmlTag.className = theme;
  localStorage.setItem("theme", theme);
}

function updateModeBox(mode) {
  let modeCheckMark = document.getElementsByClassName("check-mark");
  for (let i = 0; i < modeCheckMark.length; i++) {
    let element = modeCheckMark[i];
    if (!element.classList.contains("hidden")) {
      if (element.classList.contains("block")) {
        element.classList.replace("block", "hidden");
      } else {
        element.classList.add("hidden");
      }
    }
  }

  document.getElementById(mode + "-checkmark").classList.remove("hidden");
}

function getSystemPreferenceTheme() {
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  return prefersDarkScheme ? "dark" : "light";
}

darkMode.addEventListener("click", chnageMode);
lightMode.addEventListener("click", chnageMode);
systemPreference.addEventListener("click", chnageMode);

function chnageMode(event) {
  let themeMode = event.target.id || event.target.parentElement.id;
  let theme =
    themeMode == systemPreferenceMode ? getSystemPreferenceTheme() : themeMode;

  setTheme(theme);
  updateModeBox(themeMode);
}

function loadLastTheme() {
  const savedTheme = localStorage.getItem("theme") || getSystemPreferenceTheme();
  htmlTag.classList.add(savedTheme);
}

loadLastTheme();

//////////////////// Carrousel /////////////////////

// const prevBtn = document.getElementById("prev");
// const nextBtn = document.getElementById("next")

// let currentIndex = 1;

// function displayCard() {
//   const items = document.getElementsByClassName("item");

//   if (currentIndex > items.length) {
//     currentIndex = 1;
//   }
//   if (currentIndex < 1) {
//     currentIndex = items.length;
//   }

//   // for (let i = 0; i < items.length; i++) {
//   //   items[i].className = "hidden"
//   // }


//   items[currentIndex - 1].classList.replace("hidden", "flex");
// }

// displayCard(currentIndex);

// function changeCard(n) {
//   currentIndex += n;
//   displayCard(currentIndex);
// }

// prevBtn.addEventListener('click', changeCard(-1))
// nextBtn.addEventListener('click', changeCard(1))