const menuBtn = document.querySelector(".menu__btn");
const menuClose = document.querySelector(".menu__close-btn");
const menuList = document.querySelector(".menu__list");
const menuGround = document.querySelector(".menu--ground");
const mailForm = document.querySelector(".mailing-list__form");
const mailFormSend = document.querySelector(".mailing-list__btn");
const mailFormCheck = document.querySelector(".checkbox");
const mailFormSucsess = document.querySelector(".mailing-list_sucsess");
const mailFormSucsessActiveClass = "opened";

const closeMenu = () => {
  menuList.classList.remove("menu__list-open");
  menuGround.classList.remove("menu--open");
};

menuBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  menuList.classList.toggle("menu__list-open");
  menuGround.classList.toggle("menu--open");
});

menuClose.addEventListener("click", (event) => {
  event.stopPropagation();
  closeMenu();
});

document.addEventListener("click", (event) => {
  if (!(event.target == menuList || menuList.contains(event.target))) {
    closeMenu();
  }
});

mailFormCheck.addEventListener("change", (event) => {
  console.log("mailFormCheck.checked", event.target.checked);
  if (event.target.checked == true) {
    mailFormSend.disabled = false;
  } else {
    mailFormSend.disabled = true;
  }
  console.log("mailFormSend.disabled", mailFormSend.disabled);
});

mailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  mailFormSucsess.classList.add(mailFormSucsessActiveClass);
});
