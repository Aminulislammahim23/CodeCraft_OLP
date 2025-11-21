document.addEventListener("DOMContentLoaded", () => {

    const adminImg = document.getElementById("admin");

    adminImg.style.cursor = "pointer"; // pointer cursor

    adminImg.addEventListener("click", () => {
        window.location.href = "../view/profile.html"; 
    });

});
