document.addEventListener("DOMContentLoaded", () => {

    const editBtn = document.getElementById("editBtn");
    const editAvatarBtn = document.getElementById("editAvatarBtn");
    const avatarUpload = document.getElementById("avatarUpload");
    const avatarImg = document.getElementById("avatarImg");

    const nameText = document.getElementById("fullName");
    const emailText = document.getElementById("email");
    const phoneText = document.getElementById("phone");

    let editing = false;


    // Change Avatar
    editAvatarBtn.addEventListener("click", () => {
        avatarUpload.click();
    });

    avatarUpload.addEventListener("change", function () {
        const file = this.files[0];

        if (file) {
            const imgURL = URL.createObjectURL(file);
            avatarImg.src = imgURL;
        }
    });

    // Edit Profile Fields
    editBtn.addEventListener("click", () => {
        if (!editing) enableEditing();
        else saveProfile();
    });

    function enableEditing() {
        editing = true;
        editBtn.textContent = "Save";

        nameText.contentEditable = true;
        emailText.contentEditable = true;
        phoneText.contentEditable = true;

        nameText.style.borderBottom = "1px solid #4f46e5";
        emailText.style.borderBottom = "1px solid #4f46e5";
        phoneText.style.borderBottom = "1px solid #4f46e5";
    }

    function saveProfile() {
        editing = false;
        editBtn.textContent = "Edit Profile";

        nameText.contentEditable = false;
        emailText.contentEditable = false;
        phoneText.contentEditable = false;

        nameText.style.border = "none";
        emailText.style.border = "none";
        phoneText.style.border = "none";

        alert("Profile updated successfully!");
    }

});
