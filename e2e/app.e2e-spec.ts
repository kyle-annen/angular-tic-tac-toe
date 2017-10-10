import { AppPage } from './app.po';
import { by, element } from "protractor";

describe('Angular TicTacToe App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular Tic Tac Toe');
  });

  it('should populate the board with a move when space one is clicked', () => {
    page.navigateTo();
    let cell1 = element(by.id('cell1'));
    cell1.click();
    expect(cell1.getText()).toEqual("X");
  });

  for(let n = 1; n < 10; n++) {
    it(`should populate the board with an X at space ${n} when it is clicked`, () => {
      page.navigateTo();
      let cell = element(by.id(`cell${n}`));
      cell.click();
      expect(cell.getText()).toEqual("X");
    });
  }

});
