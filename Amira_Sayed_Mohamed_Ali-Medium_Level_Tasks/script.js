document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".close");
    const loadMoreBtn = document.getElementById("load-more");

    // Filter images based on category
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filterValue = button.dataset.filter;

            galleryItems.forEach(item => {
                item.style.display = "none";
                if (item.classList.contains(filterValue) || filterValue === "all") {
                    item.style.display = "block";
                }
            });

            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    // Lightbox functionality
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const imgSrc = item.querySelector("img").getAttribute("src");
            lightboxImg.setAttribute("src", imgSrc);
            lightbox.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Load more functionality (dummy example)
    let initialLoadCount = 3;
    loadMoreBtn.addEventListener("click", () => {
        initialLoadCount += 3;

        galleryItems.forEach((item, index) => {
            if (index < initialLoadCount) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });

        if (initialLoadCount >= galleryItems.length) {
            loadMoreBtn.style.display = "none";
        }
    });
});

