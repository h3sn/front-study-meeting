// GARALLY
const GARALLY_SEARCH_WORD = 'croissant';
const GARALLY_PER_PAGE = 10;
const GARALLY_QUERY = new URLSearchParams({ ...QUERY, ...{ per_page: `${GARALLY_PER_PAGE}`, text: `${GARALLY_SEARCH_WORD}` } });
const GARALLY_URL = `${PATH}?${GARALLY_QUERY}`;
const createProductGarally = async () => {
  const SELECTOR_MAIN = '.js-product-garally__main';
  const SELECTOR_THUMBNAILS = '.js-product-garally__thumbnails';
  const mainTarget = document.querySelector(`${SELECTOR_MAIN}`);
  const thumbnailsTarget = document.querySelector(`${SELECTOR_THUMBNAILS}`);
  const photos = await fetchFlickrPhotos(GARALLY_URL);
  const mainImg = createLicensedImageTag({
    url: `${photos[0].url_o}`,
    alt: `${photos[0].title}`,
    owner: `${photos[0].owner}`,
    id: `${photos[0].id}`,
  });
  const thumbnailsImg = photos.map((photo) =>
    createLicensedImageTag({
      url: `${photo.url_o}`,
      alt: `${photo.title}`,
      owner: `${photo.owner}`,
      id: `${photo.id}`,
    })
  );
  thumbnailsImg.forEach((div) => {
    const img = div.querySelector('img');
    img.addEventListener('click', (e) => {
      const src = e.target.getAttribute('src');
      const img = mainImg.querySelector('img');
      img.setAttribute('src', src);
    });
    thumbnailsTarget.appendChild(div);
  });
  mainTarget.appendChild(mainImg);
};

// RECOMEND
const RECOMEND_SEARCH_WORD = 'bread';
const RECOMEND_PER_PAGE = 10;
const RECOMEND_QUERY = new URLSearchParams({ ...QUERY, ...{ per_page: `${RECOMEND_PER_PAGE}`, text: `${RECOMEND_SEARCH_WORD}` } });
const RECOMEND_URL = `${PATH}?${RECOMEND_QUERY}`;
const createrRecommend = async () => {
  const SELECTOR_RECOMEND = '.js-recommend';
  const recomendTarget = document.querySelector(`${SELECTOR_RECOMEND}`);
  const photos = await fetchFlickrPhotos(RECOMEND_URL);
  // <img class="recommend__img" src="${photo.url_o}" alt="${photo.title}">
  const thumbnailsImg = photos
    .map(
      (photo) => `
                <li class="recommend__item">
                    ${createLicensedImageTag({
                      url: `${photo.url_o}`,
                      alt: `${photo.title}`,
                      owner: `${photo.owner}`,
                      id: `${photo.id}`,
                      type: 'text',
                    })}
                    <h3 class="recommend__title">${photo.title}</h3>
                    <p class="recommend__price">1,100円(税込み)</p>
                </li>
            `
    )
    .join('');
  recomendTarget.innerHTML = thumbnailsImg;
  $('.js-slick').slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
  });
};

// BANNER
const BANNER_SEARCH_WORD = 'banner';
const BANNER_PER_PAGE = 5;
const BANNER_QUERY = new URLSearchParams({ ...QUERY, ...{ per_page: `${BANNER_PER_PAGE}`, text: `${BANNER_SEARCH_WORD}` } });
const BANNER_URL = `${PATH}?${BANNER_QUERY}`;
const createrBanner = async () => {
  const SELECTOR_BANNER = '.js-banner-slick';
  const recomendTarget = document.querySelector(`${SELECTOR_BANNER}`);
  const photos = await fetchFlickrPhotos(BANNER_URL);
  const bannerImg = photos.map((photo) => `<li class="banner__item"><img class="recommend__img" src="${photo.url_o}"></li>`).join('');
  recomendTarget.innerHTML = bannerImg;
  $('.js-banner-slick').slick({
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
  });
};
