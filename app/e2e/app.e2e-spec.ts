import { Angular2RoutesBoilerplatePage } from './app.po';

describe('angular2-routes-boilerplate App', function() {
  let page: Angular2RoutesBoilerplatePage;

  beforeEach(() => {
    page = new Angular2RoutesBoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
