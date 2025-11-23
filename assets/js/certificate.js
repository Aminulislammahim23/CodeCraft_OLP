function checkCompletion(progress) {
    if (progress === 100) {
        const student = "Aminul Islam Mahim";
        const course = "Full Stack Web Development";
        const date = new Date().toLocaleDateString();

        window.location.href =
            `certificate_preview.html?name=${encodeURIComponent(student)}&course=${encodeURIComponent(course)}&date=${date}`;
    }
}
