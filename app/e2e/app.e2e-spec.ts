import { NgRoutesBoilerplatePage } from './app.po';

describe('ng-routes-boilerplate App', () => {
  let page: NgRoutesBoilerplatePage;

  beforeEach(() => {
    page = new NgRoutesBoilerplatePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
