import { NgrouterPage } from './app.po';

describe('ngrouter App', () => {
  let page: NgrouterPage;

  beforeEach(() => {
    page = new NgrouterPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
