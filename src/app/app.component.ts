import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string  = 'Angular Tic Tac Toe';
  board: Array<string> = ["1","2","3","4","5","6","7","8","9"];
  messages: Array<string> = ["Welcome to Tic Tac Toe"];
  jsonServerUrl: string = 'http://protected-anchorage-62016.herokuapp.com/';
  hideRestartButton: Boolean = true;
  computerThinking: Boolean = false;
  requestBoard: string;
  requestMove: string;


  constructor(private httpClient: HttpClient) {}

  cellClicked(n) {
    this.requestMove = (n + 1).toString();
    this.requestBoard = this.board.join(",");
    const json = { 'board': this.requestBoard, 'move': this.requestMove };
    this.computerThinking = true;
    this.sendJson(json);
  }

  sendJson(json) {
    let requestHeaders: HttpHeaders = new HttpHeaders();
    requestHeaders.append("Content-Type", 'application/json');
    requestHeaders.append("Access-Control-Allow-Origin", '*');
    const jsonString: string = JSON.stringify(json);
    this.httpClient.post(
      this.jsonServerUrl,
      jsonString,
      {
        headers: requestHeaders,
        responseType: 'json'
      }
    ).subscribe(
      (response: Response) => {
        this.updateState(response);
      });
  }

  updateState(responseJson) {
    const responseKeys: Array<string> = Object.keys(responseJson);

    if(responseKeys.includes('board')) {
      this.board = responseJson.board.split(",");
    }

    if(responseKeys.includes('messages')) {
      this.messages = responseJson.messages;
    }

    if(responseJson.messages.includes("Game Over")) {
      this.hideRestartButton = false;
    }

    this.computerThinking = false;
  }

  resetGame() {
    this.board = ["1","2","3","4","5","6","7","8","9"];
    this.messages = ["Welcome to Tic Tac Toe"];
    this.hideRestartButton = true;
    this.computerThinking = false;
  }
}
