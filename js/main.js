// Select elements
const openBtn = document.querySelector("nav .menu button");
const closeBtn = document.querySelector(".sidemenu .close");
const sideMenu = document.querySelector(".sidemenu");
const laptopMenu = document.querySelector(".laptop");

// Function to handle menu visibility based on screen size
function handleMenuDisplay() {
  if (window.innerWidth < 900) {
    laptopMenu.style.display = "none";
    openBtn.style.display = "block";
  } else {
    laptopMenu.style.display = "block";
    openBtn.style.display = "none";
    sideMenu.classList.remove("open"); // إغلاق القائمة لو كانت مفتوحة
  }
}

// Initial check
handleMenuDisplay();

// Listen for screen resize
window.addEventListener("resize", handleMenuDisplay);

// Open and close menu
openBtn.addEventListener("click", () => sideMenu.classList.add("open"));
closeBtn.addEventListener("click", () => sideMenu.classList.remove("open"));
