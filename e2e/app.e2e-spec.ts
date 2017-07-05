import { AppBsPage } from './app.po';

describe('app-bs App', () => {
  let page: AppBsPage;

  beforeEach(() => {
    page = new AppBsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
