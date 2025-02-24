document.addEventListener("DOMContentLoaded", function () {
    // Load the reviews section dynamically
    fetch("reviews.html")
        .then(response => response.text())
        .then(data => {
            // Insert the reviews HTML into the placeholder
            document.getElementById("reviews-placeholder").innerHTML = data;

            // Now that the HTML is inserted, initialize the review carousel
            let reviews = document.querySelectorAll(".review-box");
            let currentReview = 0;

            function showReview(index) {
                reviews.forEach(review => review.classList.remove("active"));
                reviews[index].classList.add("active");
            }

            document.getElementById("prev").addEventListener("click", function () {
                currentReview = (currentReview - 1 + reviews.length) % reviews.length;
                showReview(currentReview);
            });

            document.getElementById("next").addEventListener("click", function () {
                currentReview = (currentReview + 1) % reviews.length;
                showReview(currentReview);
            });

            showReview(currentReview);
        })
        .catch(error => console.error("Error loading reviews:", error));
});
