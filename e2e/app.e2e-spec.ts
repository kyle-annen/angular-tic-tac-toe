import { AppPage } from './app.po';

describe('Angular TicTacToe App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular Tic Tac Toe');
  });

  it('should polulate the board with a move', () => {
    page.navigateTo();
  })
});
