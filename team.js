document.addEventListener("DOMContentLoaded", function () {
    // Fetch and insert the team section dynamically
    fetch("/html/team.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("team-placeholder").innerHTML = html;

            // Wait for the content to be inserted before initializing the carousel
            initializeTeamCarousel();
        });

    function initializeTeamCarousel() {
        const teamWrappers = document.querySelectorAll(".team-wrapper");
        const prevBtn = document.createElement("button");
        const nextBtn = document.createElement("button");
        let currentIndex = 0;

        // Assign ID and class to buttons
        prevBtn.id = "prev";
        nextBtn.id = "next";
        prevBtn.classList.add("carousel-btn");
        nextBtn.classList.add("carousel-btn");

        // Set button text
        prevBtn.innerHTML = "&lt;";
        nextBtn.innerHTML = "&gt;";

        // Insert buttons into the carousel container
        const carouselContainer = document.querySelector(".carousel");
        if (carouselContainer) {
            carouselContainer.appendChild(prevBtn);
            carouselContainer.appendChild(nextBtn);
        }

        function showSlide(index) {
            teamWrappers.forEach((wrapper, i) => {
                wrapper.style.display = i === index ? "flex" : "none";
            });
        }

        prevBtn.addEventListener("click", function () {
            currentIndex = (currentIndex === 0) ? teamWrappers.length - 1 : currentIndex - 1;
            showSlide(currentIndex);
        });

        nextBtn.addEventListener("click", function () {
            currentIndex = (currentIndex === teamWrappers.length - 1) ? 0 : currentIndex + 1;
            showSlide(currentIndex);
        });

        showSlide(currentIndex);
    }
});
