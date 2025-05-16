
/* TODO: Fetching the Top 10 Anime  */
/* GET https://api.jikan.moe/v4/top/anime?page=1&limit=10 */
fetch("https://api.jikan.moe/v4/top/anime?page=1&limit=15")
    .then((response) => response.json())
    .then((json) => {
        const animeListData = json.data;
        console.log(animeListData)
        console.log(animeListData.length)

        animeListData.map((anime) => {

            const animeList = document.getElementById('anime-list');

            animeList.innerHTML += `
                <a draggable="false" class="item" href="${anime.url}" >
                    <img src="${anime.images.jpg.image_url}" draggable="false">
                </a>
            `;
        })
    });


/* TODO: Fetching the Top 10 Manga  */
/* GET https://api.jikan.moe/v4/top/manga?page=1&limit=10 */
fetch("https://api.jikan.moe/v4/top/manga?page=1&limit=15")
    .then((response) => response.json())
    .then((json) => {
        const mangaListData = json.data;
        console.log(mangaListData)
        console.log(mangaListData.length)

        mangaListData.map((manga) => {

            const mangaList = document.getElementById('manga-list');

            mangaList.innerHTML += `
                <a draggable="false" class="item" href="${manga.url}" >
                    <img src="${manga.images.jpg.image_url}" draggable="false">
                </a>
            `;
        })
    });



/* SLIDER */
document.querySelectorAll('.items').forEach(items => {
    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false;

    items.addEventListener('mousedown', (e) => {
        isDown = true;
        isDragging = false;
        startX = e.pageX - items.offsetLeft;
        scrollLeft = items.scrollLeft;
    });

    items.addEventListener('mouseleave', () => {
        isDown = false;
    });

    items.addEventListener('mouseup', () => {
        isDown = false;
        setTimeout(() => isDragging = false, 50);
    });

    items.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        isDragging = true;
        const x = e.pageX - items.offsetLeft;
        const walk = (x - startX) * 1.2;
        items.scrollLeft = scrollLeft - walk;
    });

    items.addEventListener('click', (e) => {
        if (isDragging) {
            e.preventDefault();
        }
    });
});