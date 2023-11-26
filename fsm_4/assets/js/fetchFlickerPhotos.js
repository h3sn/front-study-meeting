/**
 * Flicker APIから画像を取得する
 * @param url 
 * @returns 
 */
const fetchFlickerPhotos = async (url) => {
    const response = await fetch(`${url}`, { mode: 'cors' });
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const parseResponse = await response.json();
    return parseResponse.photos.photo;
};