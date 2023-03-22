import { gallery } from './data';
import { paginationSearch } from './pagination';
import { fetchSearchMovies } from './fetchSearchMovies';
import { enableLoader, disableLoader } from './loader';
import Notiflix from 'notiflix';
import { renderMovies } from './renderTrends';
import '../js/partials/notiflixSettings.js'; 

let currentQuery = '';

const refs = {
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.some-input'),
  paginationSection: document.querySelector('.pagination'),
};

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();

  if (refs.searchInput.value.trim() === '') {
    Notiflix.Notify.warning('Введите запрос');
    return;
  }

  if (refs.searchInput.value.trim() === currentQuery) {
    Notiflix.Notify.warning(
      'Результаты запроса уже показаны. Введите новый запрос'
    );
    return;
  }
  currentQuery = refs.searchInput.value.trim();

  enableLoader();
  refs.paginationSection.classList.add('is-hidden');

  fetchSearchMovies(refs.searchInput.value, 1).then(
    ({ results: images, total_results: totalResults }) => {
      disableLoader();
      if (totalResults === 0) {
        Notiflix.Notify.failure(
          'По вашему запросу не нашлось результатов'
        );
        return;
      }
      Notiflix.Notify.success(
        `По вашему запросу нашлось ${totalResults} фильмов`
      );
      paginationSearch.on('afterMove', nextSearchedPage);
      refs.paginationSection.classList.remove('is-hidden');
      paginationSearch.reset(totalResults);
      renderMovies(images);
    }
  );

  gallery.innerHTML = '';
});

function nextSearchedPage(event) {
  gallery.innerHTML = '';
  const currentPage = event.page;
  fetchSearchMovies(refs.searchInput.value, currentPage).then(
    ({ results: images }) => {
      renderMovies(images);
    }
  );
}
