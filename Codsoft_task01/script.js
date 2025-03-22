document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Loaded Successfully!");

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeModal = document.querySelector(".close");

    // Select all images that need to be clickable
    document.querySelectorAll(".certifications-container img, .project-img").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    // Close modal when clicking the close button
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
