let owlCarousel = null;
const moviesData = [];
window.addEventListener('load', () => {
  owlCarousel = document.querySelector('.movie-carousel');
  setMovie();
});

function handleClickDropdown() {
  let dropdown = document.querySelector('.dropdown');
  let dropdownButton = document.querySelector('.dropdown-button');
  if (dropdown.className === 'dropdown') {
    dropdown.className += ' responsive';
    dropdownButton.textContent = 'X';
  } else {
    dropdown.className = 'dropdown';
    dropdownButton.textContent = '☰';
  }
}

function handleClickMovie() {
  const carouselItem = document.querySelectorAll('.item');
  carouselItem.forEach((item) => {
    item.addEventListener('click', () => getMainMovie(item));
  });
}

function getMainMovie(event) {
  // const mainMovie = document.getElementsByTagName('main')[0];
  const mainTitle = document.querySelector('.title');
  const mainDescription = document.querySelector('.description');

  const [{ posterSrc, title, description }] = moviesData.filter((movie) => {
    return movie.title === event.id;
  });

  $('.main-movie').css({
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%), url('img/${posterSrc}')`,
    backgroundSize: 'cover',
  });

  mainTitle.textContent = title;
  mainDescription.textContent = description;
}

function setMovie() {
  fetch('../movies.json')
    .then((res) => res.json())
    .then((data) => doFetch(data))
    .catch((err) => console.log(err));
}

function doFetch(data) {
  let moviesHTML = `<div class="owl-carousel owl-theme">`;
  moviesData.push(...data);
  data.forEach(({ miniSrc, title }) => {
    const movieHTML = `<div class="item" id="${title}" onclick="handleClickMovie()">
        <img class="movie-box" src="img/${miniSrc}" alt="Série ${title}" />
      </div>
    `;

    moviesHTML += movieHTML;
  });
  moviesHTML += `</div>`;
  owlCarousel.innerHTML = moviesHTML;
  owlConfig();
}

function owlConfig() {
  $('.owl-carousel').owlCarousel({
    /// To use responsive config need to turn autoHeight to false (default).
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      130: {
        items: 2,
      },
      260: {
        items: 3,
      },
      450: {
        items: 4,
      },
      950: {
        items: 5,
      },
      1200: {
        items: 6,
      },
      1400: {
        items: 7,
      },
      1700: {
        items: 10,
      },
    },
    autoWidth: true,
    autoHeight: true,
  });
}
