import { Component } from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent {
  title: string  = 'Angular Tic Tac Toe';
  board: Array<string> = ["1","2","3","4","5","6","7","8","9"];
  messages: Array<string> = ["Welcome to Tic Tac Toe"];
  jsonServerUrl: string = 'https://protected-anchorage-62016.herokuapp.com/';
  hideRestartButton: Boolean = true;
  computerThinking: Boolean = false;

  constructor(private appService: AppService) {}

  cellClicked(n) {
    let requestMove = (n + 1).toString();
    let requestBoard = this.board.join(",");
    const json = { 'board': requestBoard, 'move': requestMove };
    this.computerThinking = true;
    this.appService
      .getTicTacToeData(json, this.jsonServerUrl)
      .subscribe(json => this.updateState(json))
  }

  updateState(responseJson) {
    const responseKeys: Array<string> = Object.keys(responseJson);

    if(responseKeys.includes('board')) { this.board = responseJson.board.split(","); }

    if(responseKeys.includes('messages')) { this.messages = responseJson.messages; }

    if(responseJson.messages.includes("Game Over")) { this.hideRestartButton = false; }

    this.computerThinking = false;
  }

  resetGame() {
    this.board = ["1","2","3","4","5","6","7","8","9"];
    this.messages = ["Welcome to Tic Tac Toe"];
    this.hideRestartButton = true;
    this.computerThinking = false;
  }
}
