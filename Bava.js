
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".exchange-btn button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove "active" class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));
            
            // Add "active" class to the clicked button
            this.classList.add("active");
        });
    });
});



const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



