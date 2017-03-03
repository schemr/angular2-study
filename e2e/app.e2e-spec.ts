import { FirstNewAppPage } from './app.po';

describe('first-new-app App', () => {
  let page: FirstNewAppPage;

  beforeEach(() => {
    page = new FirstNewAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
