package org.clojars.kyleannen.angulartictactoe;

import org.clojars.kyleannen.javaserver.ControllerInterface;
import org.clojars.kyleannen.javaserver.RequestParameters;
import org.clojars.kyleannen.javaserver.ResponseParameters;

import java.io.IOException;

public class ControllerTicTacToeWeb implements ControllerInterface{
  @Override
  public ResponseParameters getResponse(RequestParameters requestParameters) throws IOException {
    String indexPage = getIndexPage(requestParameters);

    return new ResponseParameters.ResponseBuilder(200)
            .setDate()
            .setBodyType(indexPage)
            .setBodyContent(indexPage)
            .setContentType(indexPage)
            .setContentDisposition(indexPage)
            .setContentLength(indexPage)
            .build();
  }

  private String getIndexPage(RequestParameters requestParameters) throws IOException {
    return requestParameters.directoryPath + "index.html";
  }
}
