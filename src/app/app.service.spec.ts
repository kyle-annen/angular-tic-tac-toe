import {TestBed, async} from "@angular/core/testing";
import {AppService} from "./app.service";
import {Component} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClientModule} from "@angular/common/http";
import {assertNotNull} from "@angular/compiler/src/output/output_ast";

@Component({
  providers: [AppService],
  templateUrl: './app.service.html'
})

class TestComponent {
  constructor(private appService: AppService) {}

  getTicTacToeData(requestJSON: object, endpointURL: string): Observable<Response> {
    return this.appService.getTicTacToeData(requestJSON, endpointURL)
  }
}




describe('Service: AppService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [HttpClientModule],
      providers: [AppService]
    }).compileComponents();
  }));

  it('receives a response', (done) => {
    const fixture = TestBed.createComponent(TestComponent);
    const endpoint = 'https://protected-anchorage-62016.herokuapp.com/';
    const testJson: object = {'board':'1,2,3,4,5,6,7,8,9','move':'1'};

    fixture.componentInstance
      .getTicTacToeData(testJson, endpoint)
      .subscribe((response) => {
        expect(response).toBeDefined();
        done();
      });
  });

  it('places the X at move indicated', (done) => {
    const fixture = TestBed.createComponent(TestComponent);
    const endpoint = 'https://protected-anchorage-62016.herokuapp.com/';
    const testJson: object = {'board':'1,2,3,4,5,6,7,8,9','move':'1'};

    fixture.componentInstance
      .getTicTacToeData(testJson, endpoint)
      .subscribe((response) => {
        const board = response['board'].split(",");
        expect(board[0]).toEqual("X");
        done();
      });
  });

  it('returns a board with the computer move made', (done) => {
    const fixture = TestBed.createComponent(TestComponent);
    const endpoint = 'https://protected-anchorage-62016.herokuapp.com/';
    const testJson: object = {'board':'1,2,3,4,5,6,7,8,9','move':'1'};

    fixture.componentInstance
      .getTicTacToeData(testJson, endpoint)
      .subscribe((response) => {
        const board = response['board'].split(",");
        expect(board).toContain("O");
        done();
      });
  });

  it('game over state gives game over message', (done) => {
    const fixture = TestBed.createComponent(TestComponent);
    const endpoint = 'https://protected-anchorage-62016.herokuapp.com/';
    const testJson: object = {'board':'X,X,3,O,O,6,7,8,9','move':'3'};

    fixture.componentInstance
      .getTicTacToeData(testJson, endpoint)
      .subscribe((response) => {
        const messages = response['messages'];
        expect(messages).toContain("Game Over");
        done();
      });
  });
});














