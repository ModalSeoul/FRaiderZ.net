import { FRaiderzPage } from './app.po';

describe('fraiderz App', function() {
  let page: FRaiderzPage;

  beforeEach(() => {
    page = new FRaiderzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
