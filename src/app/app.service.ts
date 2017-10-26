
import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AppService {

  constructor(private httpClient: HttpClient) {}

  getTicTacToeData(requestJSON: object, endpointURL: string): Observable<Response>{
    let requestHeaders: HttpHeaders = new HttpHeaders();
    requestHeaders.append("Content-Type", 'application/json');
    requestHeaders.append("Access-Control-Allow-Origin", '*');
    const jsonString: string = JSON.stringify(requestJSON);
    return this.httpClient.post(
      endpointURL,
      jsonString,
      { headers: requestHeaders })
  }
}
