const btn = document.querySelector('.panel__btn');
const panel = document.querySelector('.panel');
const input = document.querySelector('.panel__in');
const gallery = document.querySelector('.gallery');

const getPhotos = async () => {
  const ID = 'DMxrS_actnCAQ_G1E_7nzuCbKAY9FfUNfWRL3HV5Qow';
  const query = input.value;
  const endpoint = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ID}`;

  const response = await fetch(endpoint);
  const data = response.json();

  return data;
};

btn.addEventListener('click', (e) => {
  panel.classList.add('panel--top');
  gallery.classList.add('gallery--top');
  gallery.innerHTML = '';
  getPhotos()
    .then((data) => {
      const srcs = new Array();

      data.results.forEach((element) => {
        srcs.push(element.urls.regular);
      });

      console.log(srcs);

      srcs.forEach((src) => {
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('gallery__image');

        const img = document.createElement('img');
        img.classList.add('gallery__img');
        img.src = src;

        setTimeout(() => {
          imageDiv.appendChild(img);
          gallery.appendChild(imageDiv);
        }, 400);
      });
    })
    .catch((err) => console.log(err));
});
