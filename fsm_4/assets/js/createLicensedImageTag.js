/**
 * ライセンス表記付きimgタグを返す
 * @param {*} options
 * @returns DOM or text
 */
const createLicensedImageTag = (options) => {
  const domParser = new DOMParser();
  const url = options.url;
  const alt = options.alt;
  const owner = options.owner;
  const id = options.id;
  const type = options.type;
  const PATH = 'https://www.flickr.com/photos/';
  const licenseURL = `${PATH}${owner}/${id}`;
  const style = 'position: absolute; left: 10px; bottom: 10px; font-size: 9px; color: #fff';
  const template = `
    <div class="flickr" style="position: relative">
        <a class="flickr__owner" href="${licenseURL}" style="${style}">photo by ${owner}</a>
        <img class="flickr__photo" src="${url}" alt="${alt}">
    </div>
    `;
  //   return template;
  if (type === 'text') {
    return template;
  }
  return domParser.parseFromString(template, 'text/html').querySelector('div');
};
