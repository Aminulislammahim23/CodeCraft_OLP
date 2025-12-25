document.addEventListener("DOMContentLoaded", () => {

    const editBtn = document.getElementById("editBtn");
    const editAvatarBtn = document.getElementById("editAvatarBtn");
    const avatarUpload = document.getElementById("avatarUpload");
    const avatarImg = document.getElementById("avatarImg");
    const changePasswordBtn = document.getElementById("changePasswordBtn");

    const nameText = document.getElementById("fullName");
    const emailText = document.getElementById("email");
    const phoneText = document.getElementById("phone");
    const passwordText = document.getElementById("password");

    let isEditingProfile = false;
    let isEditingPassword = false;

    // Avatar upload
    editAvatarBtn.addEventListener("click", () => {
        avatarUpload.click();
    });

    avatarUpload.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            avatarImg.src = URL.createObjectURL(file);
        }
    });

    // Edit profile button
    editBtn.addEventListener("click", () => {
        if (!isEditingProfile) {
            enableProfileEditing();
        } else {
            saveProfile();
        }
    });

    // Change password button
    changePasswordBtn.addEventListener("click", () => {
        if (!isEditingPassword) {
            enablePasswordEditing();
        } else {
            savePassword();
        }
    });

    function enableProfileEditing() {
        isEditingProfile = true;
        editBtn.textContent = "Save Profile";

        nameText.contentEditable = true;
        emailText.contentEditable = true;
        phoneText.contentEditable = true;

        nameText.style.borderBottom = "1px solid #4f46e5";
        emailText.style.borderBottom = "1px solid #4f46e5";
        phoneText.style.borderBottom = "1px solid #4f46e5";
    }

    function saveProfile() {
        isEditingProfile = false;
        editBtn.textContent = "Edit Profile";

        nameText.contentEditable = false;
        emailText.contentEditable = false;
        phoneText.contentEditable = false;

        nameText.style.border = "none";
        emailText.style.border = "none";
        phoneText.style.border = "none";

        alert("Profile updated successfully!");
    }

    function enablePasswordEditing() {
        isEditingPassword = true;
        changePasswordBtn.textContent = "Save Password";

        passwordText.contentEditable = true;
        passwordText.style.borderBottom = "1px solid #4f46e5";
    }

    function savePassword() {
        isEditingPassword = false;
        changePasswordBtn.textContent = "Change Password";

        passwordText.contentEditable = false;
        passwordText.style.border = "none";

        alert("Password changed successfully!");
    }

});
