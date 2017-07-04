import { AngularTrailPage } from './app.po';

describe('angular-trail App', () => {
  let page: AngularTrailPage;

  beforeEach(() => {
    page = new AngularTrailPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
