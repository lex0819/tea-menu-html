const menuBtn = document.querySelector(".menu__btn");
const menuClose = document.querySelector(".menu__close-btn");
const menuList = document.querySelector(".menu__list");
const menuGround = document.querySelector(".menu--ground");
const mailForm = document.querySelector(".mailing-list__form");
const mailFormSend = document.querySelector(".mailing-list__btn");
const mailFormCheck = document.querySelector(".checkbox");
const mailFormSucsess = document.querySelector(".mailing-list_sucsess");

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
  // console.log("mailFormCheck.checked", event.target.checked);
  if (event.target.checked == true) {
    mailFormSend.disabled = false;
  } else {
    mailFormSend.disabled = true;
  }
  // console.log("mailFormSend.disabled", mailFormSend.disabled);
});

function sendData() {
  const email = document.querySelector(".mailing-list__email").value;

  console.log("email", email);
  if (/^[^ ]+@[^ ]+\.[a-z]{2,}$/.test(email)) {
    const formData = new FormData(mailForm);
    // formData.append("email", email);
    // console.log("mailForm", mailForm);
    // console.log("formData", formData);

    fetch("https://tea-nav-menu.elenivan.ru/form-data.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log(response.text());
          mailFormSucsess.innerHTML = "You've successfully joined!";
        } else {
          mailFormSucsess.innerHTML = "Form sending error!";
          throw new Error("Form sending error!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    mailFormSucsess.innerHTML = "Incorrect email!";
  }
}

mailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});
