import { EdukacjaPage } from './app.po';

describe('edukacja App', function() {
  let page: EdukacjaPage;

  beforeEach(() => {
    page = new EdukacjaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
