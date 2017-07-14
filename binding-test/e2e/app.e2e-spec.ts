import { BindingTestPage } from './app.po';

describe('binding-test App', () => {
  let page: BindingTestPage;

  beforeEach(() => {
    page = new BindingTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
