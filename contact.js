document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit-btn").addEventListener("click", function () {
        const name = document.getElementById("full-name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Message sent successfully!");
    });
});
