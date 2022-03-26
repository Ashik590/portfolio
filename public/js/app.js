//progbar logic of animation

const progBar = document.querySelectorAll(".prog_bar");

window.addEventListener("scroll", () => {
  progBar.forEach((value) => {
    let className = value.getAttribute("data-percent");
    let top = value.getBoundingClientRect().top;
    let h = innerHeight / 1.05;

    if (top < h) {
      value.classList.add(className);
    }
  });
});

// User validation

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const btn = document.querySelector(".con_form form button");
const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const message_error = document.getElementById("message_error");

name.addEventListener("input", () => {
  name_error.innerHTML = "";
});
email.addEventListener("input", () => {
  email_error.innerHTML = "";
});
message.addEventListener("input", () => {
  message_error.innerHTML = "";
});

btn.addEventListener("click", () => {
  if (name.value === "" || email.value === "" || message.value === "") {
    if (name.value === "") {
      name_error.innerHTML = "Please fill the name field";
    }
    if (email.value === "") {
      email_error.innerHTML = "Please fill the email field";
    }
    if (message.value === "") {
      message_error.innerHTML = "Please fill the message field";
    }
  } else {
    btn.type = "submit";
  }
});

// navbar logic for active class

const li1 = document.querySelectorAll("nav ul li a")[0];
const li2 = document.querySelectorAll("nav ul li a")[1];
const li3 = document.querySelectorAll("nav ul li a")[2];
const li4 = document.querySelectorAll("nav ul li a")[3];
const li5 = document.querySelectorAll("nav ul li a")[4];
const li6 = document.querySelectorAll("nav ul li a")[5];

window.addEventListener("scroll", function () {
  const section1 = document.querySelector("#hero").getBoundingClientRect().top;
  const section1Height = document
    .querySelector("#hero")
    .getBoundingClientRect().height;
  const section2 = document
    .querySelector("#service")
    .getBoundingClientRect().top;
  const section2Height = document
    .querySelector("#service")
    .getBoundingClientRect().height;
  const section3 = document.querySelector("#skill").getBoundingClientRect().top;
  const section3Height = document
    .querySelector("#skill")
    .getBoundingClientRect().height;
  const section4 = document
    .querySelector("#portfolio")
    .getBoundingClientRect().top;
  const section4Height = document
    .querySelector("#portfolio")
    .getBoundingClientRect().height;
  const section5 = document.querySelector("#about").getBoundingClientRect().top;
  const section5Height = document
    .querySelector("#about")
    .getBoundingClientRect().height;
  const section6 = document
    .querySelector("#contact")
    .getBoundingClientRect().top;
  const section6Height = document
    .querySelector("#contact")
    .getBoundingClientRect().height;

  if (section1 <= 1 && section1 > -section1Height + 1) {
    li1.classList.add("active");
    li2.classList.remove("active");
    li3.classList.remove("active");
    li4.classList.remove("active");
    li5.classList.remove("active");
    li6.classList.remove("active");
  } else if (section2 <= 1 && section2 > -section2Height + 1) {
    li2.classList.add("active");
    li1.classList.remove("active");
    li3.classList.remove("active");
    li4.classList.remove("active");
    li5.classList.remove("active");
    li6.classList.remove("active");
  } else if (section3 <= 1 && section3 > -section3Height + 1) {
    li3.classList.add("active");
    li1.classList.remove("active");
    li2.classList.remove("active");
    li4.classList.remove("active");
    li5.classList.remove("active");
    li6.classList.remove("active");
  } else if (section4 <= 1 && section4 > -section4Height + 1) {
    li4.classList.add("active");
    li1.classList.remove("active");
    li2.classList.remove("active");
    li3.classList.remove("active");
    li5.classList.remove("active");
    li6.classList.remove("active");
  } else if (section5 <= 1 && section5 > -section5Height + 1) {
    li5.classList.add("active");
    li2.classList.remove("active");
    li1.classList.remove("active");
    li3.classList.remove("active");
    li4.classList.remove("active");
    li6.classList.remove("active");
  } else if (section6 <= 1 && section6 > -section6Height + 1) {
    li6.classList.add("active");
    li2.classList.remove("active");
    li1.classList.remove("active");
    li3.classList.remove("active");
    li4.classList.remove("active");
    li5.classList.remove("active");
  }
});

// responsive nav logic

const menu = document.querySelector("nav img[alt='menu']");
const res_nav = document.getElementById("res_nav");
const cross = document.querySelector("#res_nav > img");
const res_as = document.querySelectorAll("#res_nav a");

menu.addEventListener("click", () => {
  res_nav.classList.remove("d-none");
});

cross.addEventListener("click", () => {
  res_nav.classList.add("d-none");
});

res_as.forEach((value) => {
  value.addEventListener("click", () => {
    res_nav.classList.add("d-none");
  });
});

// loading logic

const loading = document.querySelector('.loading');

window.addEventListener('load',()=>{
  loading.style.animation = "loaded 0.5s linear forwards";
  setTimeout(() => {
    loading.classList.add('d-none');
  }, 500);
});