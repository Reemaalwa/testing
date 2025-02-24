document.addEventListener("DOMContentLoaded", function () {
    // Fetch and insert the mailing list HTML into the placeholder div
    fetch("mailing-list.html")
        .then(response => response.text())
        .then(data => {
            // Insert the mailing list HTML into the placeholder
            document.getElementById("mailing-list-placeholder").innerHTML = data;

            // Now that the HTML is inserted, we can attach the event listener
            const subscribeBtn = document.getElementById("subscribe-btn");

            subscribeBtn.addEventListener("click", function () {
                const emailInput = document.getElementById("email");
                const message = document.getElementById("subscription-message");

                if (emailInput.value.includes("@") && emailInput.value.includes(".")) {
                    message.textContent = "Thank you for subscribing!";
                    message.style.color = "green";
                } else {
                    message.textContent = "Please enter a valid email.";
                    message.style.color = "red";
                }

                message.classList.remove("hidden");
            });
        })
        .catch(error => console.error("Error loading mailing list:", error));
});
