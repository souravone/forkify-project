import view from './view';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class resultsView extends view {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'U mad bruh!';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new resultsView();
