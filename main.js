/* fetch('data/users.json')
    .then(response => response.json())
    .then(users => {
        const userContainer = document.getElementById('userContainer');
        const userInfo = document.getElementById('userInfo');

        users.users.forEach(user => {
            const userProfile = document.createElement('div');
            userProfile.classList.add('user-profile');
            userProfile.innerHTML = `
                        <img src="https://via.placeholder.com/100" alt="User Avatar">
                        <p>${user.username}</p>
                    `;
            userProfile.addEventListener('click', () => {
                userInfo.style.display = 'block';
                userInfo.innerHTML = `
                            <h2>${user.username}</h2>
                            <p><strong>Email:</strong> ${user.email}</p>
                            <p><strong>Favorite Genres:</strong> ${user.favorite_genres.join(', ')}</p>
                            <h3>Watchlist:</h3>
                            <ul>
                                ${user.watchlist.map(anime => `<li>${anime.title} - ${anime.status}</li>`).join('')}
                            </ul>
                        `;
            });
            userContainer.appendChild(userProfile);
        });
    })
    .catch(error => console.error('Error loading users:', error)); */

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
            let animeContainer = document.createElement('div');
            animeContainer.classList.add('anime');
            animeList.appendChild(animeContainer)
            animeContainer.innerHTML = `
                <a href="${anime.url}">
                    <img src="${anime.images.jpg.image_url}">
                </a>
            `
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
            let mangaContainer = document.createElement('div');
            mangaContainer.classList.add('anime');
            mangaList.appendChild(mangaContainer)
            mangaContainer.innerHTML = `
                <a href="${manga.url}">
                    <img src="${manga.images.jpg.image_url}">
                </a>
            `
        })
    });