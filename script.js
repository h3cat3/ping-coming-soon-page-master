const email = document.getElementById("email");
const submitBtn =document.getElementById("submit-btn");
const errorMsg = document.querySelector(".error-msg")
submitBtn.addEventListener('click', () => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.value === "" || !email.value.match(regex)) {
        email.classList.add("error");
        errorMsg.style.display = "block"
    } else {mail.classList.remove("error");
    errorMsg.style.display = "none";}
})
email.addEventListener('focus', () => {
    email.classList.remove("error");
    errorMsg.style.display = "none";
})