const mailForm = document.querySelector(".gform");
const openMailBtn = document.querySelector(".mail");
const closeMailBtn = document.querySelector(".gform .close");
const MailModal = document.querySelector("#pop-up");

const closeMailModalEvent = () => {
  MailModal.style.display = "none";
};
const openMailModalEvent = () => {
  MailModal.style.display = "block";
};

closeMailBtn.addEventListener("click", closeMailModalEvent);
openMailBtn.addEventListener("click", openMailModalEvent);
