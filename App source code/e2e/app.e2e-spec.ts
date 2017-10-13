import { IntellictPage } from './app.po';

describe('intellict App', () => {
  let page: IntellictPage;

  beforeEach(() => {
    page = new IntellictPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
