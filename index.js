
// Select all the buttons and content divs
const buttons = document.querySelectorAll(".button-menu");
const menus = document.querySelectorAll(".menu");

// Loop through the buttons
buttons.forEach((button) => {
  // Add a click event listener to each button
  button.addEventListener("click", () => {
    // Get the value of the data-menu attribute
    const menu = button.dataset.menu;

    // Loop through the buttons
    buttons.forEach((btn) => {
      // Check if the button matches the clicked button
      if (btn === button) {
        // Add the active class to the button
        btn.classList.add("active-btn");
      } else {
        // Remove the active class from the button
        btn.classList.remove("active-btn");
      }
    });

    // Loop through the content divs
    menus.forEach((item) => {
      // Check if the content div matches the button
      if (item.classList.contains(menu)) {
        // Add the active class to show the content
        item.classList.add("active");
      } else {
        // Remove the active class to hide the content
        item.classList.remove("active");
      }
    });
  });
});

var menuButton = document.getElementById("menu-open-button");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});
var menuButton = document.getElementById("menu-close-button");

menuButton.addEventListener("click", function() {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});
