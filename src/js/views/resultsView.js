import view from './view';
import icons from 'url:../../img/icons.svg';
class resultsView extends view {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'U mad bruh!';
  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }
  _generateMarkupPreview(results) {
    return `
    <li class="preview">
            <a class="preview__link" href="#${results.id}">
              <figure class="preview__fig">
                <img src="${results.imageURL}" alt="${results.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${results.title}</h4>
                <p class="preview__publisher">${results.publisher}</p>
                
              </div>
            </a>
          </li>
    `;
  }
}

export default new resultsView();
