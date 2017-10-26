import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ HttpClientModule ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`has as title 'Angular Tic Tac Toe'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Tic Tac Toe');
  }));

  it('renders title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular Tic Tac Toe');
  }));

  it('renders the initial numbers to the board', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    for(let _i; _i < 10; _i++) {
      expect(compiled.querySelector('.cell').textContent).toContain(`${_i}`);
    }
  }));

  it('renders messages in the message tags', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.message').textContent).toContain('Welcome to Tic Tac Toe');
  }));

  describe("updateState", () => {
      const expectedBoard = 'X,2,3,4,5,6,7,8,9';
      const expectedMessage1 = 'This is a test message';
      const expectedMessage2 = 'This is a second test message';
      const testJson = {
        'board': expectedBoard,
        'messages': [
          expectedMessage1,
          expectedMessage2
        ]
      };

    it("updates the board class with the received board", () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.componentInstance.updateState(testJson);
      fixture.detectChanges();
      const actualBoard = fixture.componentInstance.board;
      const expectedBoardArray: string[] = expectedBoard.split(",");

      expect(actualBoard).toEqual(expectedBoardArray);
    });

    it("updates the messages class variable with the received messages", () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.componentInstance.updateState(testJson);
      fixture.detectChanges();
      const actualMessages = fixture.componentInstance.messages;
      const expectedMessages = testJson.messages;

      expect(actualMessages).toEqual(expectedMessages);
    });

    it("updates the computer thinking class variable to false once update state is called", () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.componentInstance.computerThinking = true;
      fixture.componentInstance.updateState(testJson);
      fixture.detectChanges();
      const expected = false;
      const actual = fixture.componentInstance.computerThinking;

      expect(actual).toEqual(expected);
    });
  });

  describe("resetGame", () => {
    const expectedBoard = 'X,2,3,4,5,6,7,8,9';
    const expectedMessage1 = 'This is a test message';
    const expectedMessage2 = 'This is a second test message';
    const testJson = {
      'board': expectedBoard,
      'messages': [
        expectedMessage1,
        expectedMessage2
      ]
    };

    it("resets the board to a blank board", () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.componentInstance.updateState(testJson)
      fixture.detectChanges();

      const expectedNonResetBoard = expectedBoard.split(",");
      const actualNonResetBoard = fixture.componentInstance.board;

      expect(actualNonResetBoard).toEqual(expectedNonResetBoard);

      fixture.componentInstance.resetGame();
      fixture.detectChanges();

      const expectedResetBoard = "1,2,3,4,5,6,7,8,9".split(",");
      const actualBoardValue = fixture.componentInstance.board

      expect(actualBoardValue).toEqual(expectedResetBoard);
    });


    it("resets the messages to the welcome messages", () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.componentInstance.updateState(testJson)
      fixture.detectChanges();

      const expectedNonResetMessages = testJson.messages;
      const actualNonResetMessages = fixture.componentInstance.messages;

      expect(actualNonResetMessages).toEqual(expectedNonResetMessages);

      fixture.componentInstance.resetGame()
      fixture.detectChanges();

      const expectedResetMessages = ["Welcome to Tic Tac Toe"];
      const actualResetMessages = fixture.componentInstance.messages;

      expect(actualResetMessages).toEqual(expectedResetMessages);
    });

    it("hides the restart button", () => {
      const gameOverBoard = 'X,O,X,O,X,6,7,8,X';
      const gameOverMessage = 'Game Over';
      const testJson = {
        'board': gameOverBoard,
        'messages': [
          gameOverMessage
        ]
      };

      const fixture = TestBed.createComponent(AppComponent);
      fixture.componentInstance.updateState(testJson);
      fixture.detectChanges();

      const app = fixture.debugElement.nativeElement;
      const restartButtonHidden = app.querySelector('.message.button').hidden;

      expect(restartButtonHidden == false);

      fixture.componentInstance.resetGame();
      fixture.detectChanges();

      const restartButtonHiddenAfterReset = app.querySelector('.message.button').hidden;

      expect(restartButtonHiddenAfterReset == true);
    });

    it("disables the computer thinking splash when called", () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.componentInstance.updateState(testJson);
      fixture.componentInstance.computerThinking = true;
      fixture.detectChanges();

      const computerThinkingBeforeReset = fixture.componentInstance.computerThinking;
      const expected = true;

      expect(computerThinkingBeforeReset).toEqual(expected);

      fixture.componentInstance.resetGame();
      fixture.detectChanges();

      const computerThinkingAfterReset = fixture.componentInstance.computerThinking;
      const expectedAfterReset = false;

      expect(computerThinkingAfterReset).toEqual(expectedAfterReset);
    });
  });
});
