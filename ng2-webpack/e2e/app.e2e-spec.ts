import { Ng2WebpackPage } from './app.po';

describe('ng2-webpack App', function() {
  let page: Ng2WebpackPage;

  beforeEach(() => {
    page = new Ng2WebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
