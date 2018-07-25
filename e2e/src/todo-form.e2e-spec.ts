import { AppPage } from './todo-form.po';
import { browser } from '../../node_modules/protractor';

describe('New Todo Form', () => {
  let page: AppPage;

  beforeAll(() => {
    // Arrange
    page = new AppPage();
    page.navigateTo();
  });

  it('should disable button when todo is empty', () => {
    // Act
    page.setTodo('');
    // Assert
    expect(page.getSaveButton().getAttribute('disabled')).toBeTruthy();
  });

  it('should not disable button when todo is empty', () => {
    // Act
    page.setTodo('new todo!');
    // Assert
    expect(page.getSaveButton().getAttribute("disabled")).toBeFalsy();
  });

  it('should navigate to /home when saved', async () => {
    // Arrage
    page.setTodo("new Todo");
    // Act
    page.getSaveButton().click();
    // Assert()
    expect(browser.getCurrentUrl()).toContain('/home');
  })
});
