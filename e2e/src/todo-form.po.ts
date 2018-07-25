import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/new');
  }

  setTodo(todo) {
    element(by.css('#todo')).sendKeys(todo);
  }

  getSaveButton() {
    return element(by.css('#btn-save'));
  }
}
