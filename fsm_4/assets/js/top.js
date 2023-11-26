
// GARALLY
const GARALLY_SEARCH_WORD = 'croissant';
const GARALLY_PER_PAGE = 10;
const GARALLY_QUERY = new URLSearchParams({ ...QUERY, ...{ per_page: `${GARALLY_PER_PAGE}`, text: `${GARALLY_SEARCH_WORD}` } });
const GARALLY_URL = `${PATH}?${GARALLY_QUERY}`;
const createProductGarally = async () => {
    let photos = [];
    const SELECTOR_MAIN = '.js-product-garally__main';
    const SELECTOR_THUMBNAILS = '.js-product-garally__thumbnails';
    const mainTarget = document.querySelector(`${SELECTOR_MAIN}`);
    const thumbnailsTarget = document.querySelector(`${SELECTOR_THUMBNAILS}`);
    photos = await fetchFlickerPhotos(GARALLY_URL);
    const mainImg = `<img src="${photos[0].url_h}" alt="${photos[0].title}">`;
    // const thumbnailsImg = photos.map(photo => `<img src="${photo.url_h}" alt="${photo.title}">`).join('');
    const thumbnailsImg = photos.map(photo => `<img src="${photo.url_h}">`).join('');
    mainTarget.innerHTML = mainImg;
    thumbnailsTarget.innerHTML = thumbnailsImg;
};

// RECOMEND
const RECOMEND_SEARCH_WORD = 'bread';
const RECOMEND_PER_PAGE = 30;
const RECOMEND_QUERY = new URLSearchParams({ ...QUERY, ...{ per_page: `${RECOMEND_PER_PAGE}`, text: `${RECOMEND_SEARCH_WORD}` } });
const RECOMEND_URL = `${PATH}?${RECOMEND_QUERY}`;
const createrRecommend = async () => {
    let recommendItems = [];
    const SELECTOR_RECOMEND = '.js-recommend';
    const recomendTarget = document.querySelector(`${SELECTOR_RECOMEND}`);
    photos = await fetchFlickerPhotos(RECOMEND_URL);
    // <img class="recommend__img" src="${photo.url_h}" alt="${photo.title}">
    const thumbnailsImg = photos.map(photo => `
                <li class="recommend__item">
                    <img class="recommend__img" src="${photo.url_h}">
                    <h3 class="recommend__title">${photo.title}</h3>
                    <p class="recommend__price">1,100円(税込み)</p>
                </li>
            `).join('');
    recomendTarget.innerHTML = thumbnailsImg;
    $('.js-slick').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
    });
};