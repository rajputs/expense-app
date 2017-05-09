import { MyExpensesPage } from './app.po';

describe('my-expenses App', () => {
  let page: MyExpensesPage;

  beforeEach(() => {
    page = new MyExpensesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
