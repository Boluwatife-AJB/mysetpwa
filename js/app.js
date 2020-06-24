const container = document.querySelector('.container');
const courseMates = [
  {
    name: 'Ilori Ernest.',
    image: 'images/ernest.jpg',
    phone: '07010810781',
  },
  {
    name: 'Omowabi Huswat.',
    image: 'images/huswat.jpg',
    phone: '08181397914',
  },
  {
    name: 'Akoni Lekan.',
    image: 'images/akoni.jpg',
    phone: '08147565170',
  },
  {
    name: 'Aniboh Jesse.',
    image: 'images/jessy.jpg',
    phone: '09057278643',
  },
  {
    name: 'Adelokiki Ayotunde.',
    image: 'images/loki.jpg',
    phone: '08144582537',
  },
  { name: ' Adeleke Kabir', image: 'images/odun.jpg', phone: '08183082557' },
  {
    name: 'Adebayo Solomon.',
    image: 'images/solomon.jpg',
    phone: '08135932074',
  },
  {
    name: 'Achusi Stephanie.',
    image: 'images/steph.jpg',
    phone: '09036022883',
  },
  {
    name: 'Rahman Oluwatomisin. ',
    image: 'images/tomi.jpg',
    phone: '09075007267',
  },
];

const showCourseMates = () => {
  let output = '';
  courseMates.forEach(
    ({ name, image, phone }) =>
      (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" >${phone}</a>
                </div>
                `)
  );
  container.innerHTML = output;
};

document.addEventListener('DOMContentLoaded', showCourseMates);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then((res) => console.log('service worker registered'))
      .catch((err) => console.log('service worker not registered', err));
  });
}
