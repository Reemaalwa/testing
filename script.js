document.addEventListener("DOMContentLoaded", function () {
    const reviews = document.querySelectorAll(".review-box");
    let currentReview = 0;

    function showReview(index) {
        reviews.forEach(review => review.style.display = "none");
        reviews[index].style.display = "block";
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
    // Navigation Highlight for Active Page
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // About Us Button Alert
    document.getElementById("about-btn").addEventListener("click", function () {
        alert("Navigating to About Us section!");
    });
});
