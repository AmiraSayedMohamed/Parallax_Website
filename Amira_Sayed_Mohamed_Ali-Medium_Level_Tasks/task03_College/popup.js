const wallpapers = [
    { url: 'images/wallpaper1.jpg', category: 'nature' },
    { url: 'images/wallpaper2.jpg', category: 'abstract' },
    { url: 'images/wallpaper3.jpg', category: 'city' },
    // Add more wallpapers with their respective categories
];

const searchInput = document.getElementById('search');
const categories = document.querySelectorAll('.category');
const wallpapersContainer = document.getElementById('wallpapers');
const randomizeButton = document.getElementById('randomize');

function displayWallpapers(filteredWallpapers) {
    wallpapersContainer.innerHTML = '';
    filteredWallpapers.forEach(wallpaper => {
        const wallpaperDiv = document.createElement('div');
        wallpaperDiv.classList.add('wallpaper');
        wallpaperDiv.style.backgroundImage = `url(${wallpaper.url})`;
        wallpaperDiv.addEventListener('click', () => setWallpaper(wallpaper.url));
        wallpapersContainer.appendChild(wallpaperDiv);
    });
}

function filterWallpapers() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = document.querySelector('.category.active')?.dataset.category;
    const filteredWallpapers = wallpapers.filter(wallpaper => {
        const matchesCategory = selectedCategory ? wallpaper.category === selectedCategory : true;
        const matchesSearch = wallpaper.url.toLowerCase().includes(searchText);
        return matchesCategory && matchesSearch;
    });
    displayWallpapers(filteredWallpapers);
}

function setWallpaper(url) {
    // In a real extension, you'd use an API to set the desktop wallpaper.
    // For this example, we just alert the URL.
    alert(`Wallpaper set to: ${url}`);
}

function randomizeWallpaper() {
    const randomWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    setWallpaper(randomWallpaper.url);
}

searchInput.addEventListener('input', filterWallpapers);

categories.forEach(category => {
    category.addEventListener('click', function () {
        categories.forEach(cat => cat.classList.remove('active'));
        this.classList.add('active');
        filterWallpapers();
    });
});

randomizeButton.addEventListener('click', randomizeWallpaper);

// Initial display of all wallpapers
displayWallpapers(wallpapers);

