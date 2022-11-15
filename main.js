const API_URL_RANDOM = 'https://api.thedogapi.com/v1/images/search?limit=2&api_key=live_iNKOYHqsxpvxZ2ESNznHtHFCk5YwME3byf4YbeZ4wBwTrlU9ogh612VkCbylXc4W';

const API_URL_FAVOURITES = 'https://api.thedogapi.com/v1/favourites?/search?limit=2&api_key=live_iNKOYHqsxpvxZ2ESNznHtHFCk5YwME3byf4YbeZ4wBwTrlU9ogh612VkCbylXc4W';


const spanError = document.getElementById('error')

async function loadRandomDogs() {
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();
    console.log('Random');
    console.log(data);

    if(res.status!== 200){
        spanError.innerHTML="Hubo un error: " + res.status;
    }else {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');        
        
        img1.src = data[0].url;
        img2.src = data[1].url;
    }
   
};

async function loadFavoritesDogs() {
    const res = await fetch(API_URL_FAVOURITES);
    const data = await res.json();
    console.log('Favorites');
    console.log(data);

    if(res.status!== 200){
        spanError.innerHTML="Hubo un error: " + res.status;
    }
};

async function saveFavoriteDog() {
    const res = await fetch(API_URL_FAVOURITES, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            image_id: "WVawT4Gap"
        }),
    });

    const data = await res.json();

    console.log('Save')
    console.log(res)

    if(res.status!== 200){
        spanError.innerHTML="Hubo un error: " + res.status;
    }
}

loadRandomDogs();
loadFavoritesDogs();