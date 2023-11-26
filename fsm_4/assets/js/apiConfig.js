// API
const PATH = 'https://www.flickr.com/services/rest/';
const API_KEY = '9f052d62a2c05f86692a9a4a18f1aedb';
const QUERY = {
  method: 'flickr.photos.search',
  api_key: `${API_KEY}`,
  extras: 'url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o, license, date_upload, owner_name',
  format: 'json',
  per_page: 10,
  nojsoncallback: 1,
  license: [1, 2, 3],
  //   license: '1, 2, 3, 5, 6, 7',
  sort: 'date-posted-desc',
};
