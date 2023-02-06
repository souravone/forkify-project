import view from './view';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class bookmarksView extends view {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'no bookmarks yet bro';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new bookmarksView();
