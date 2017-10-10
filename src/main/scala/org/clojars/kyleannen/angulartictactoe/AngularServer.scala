package org.clojars.kyleannen.angulartictactoe

import org.clojars.kyleannen.javaserver.{ConfigureServer, Router}

import scala.util.Properties

object AngularServer {
  def start(): Unit = {
    val router = new Router()
    router.addRoute("GET","/", new ControllerTicTacToeWeb)
    router.disableDirectoryRouting()
    val baseDirectory: String = System.getProperty("user.dir")
    val webDirectory: String = baseDirectory + "/dist/"
    val port = Properties.envOrElse("PORT", "3434")
    val args: Array[String] = Array("-p", port, "-d", webDirectory)
    val gameServer = new ConfigureServer().configure(args, router)
    gameServer.run()
  }

  def main(args: Array[String]): Unit = {
    start()
  }
}
