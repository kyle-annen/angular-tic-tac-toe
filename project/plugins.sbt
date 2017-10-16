addSbtPlugin("com.typesafe.sbt" % "sbt-mocha" % "1.1.2")
addSbtPlugin("com.eed3si9n" % "sbt-assembly" % "0.14.5")
addSbtPlugin("com.heroku" % "sbt-heroku" % "2.0.0")
addSbtPlugin("com.typesafe.sbt" % "sbt-native-packager" % "1.2.2")
resolvers += "Typesafe Repository" at "https://repo.typesafe.com/typesafe/releases/"
resolvers += Resolver.url("scoverage-bintray", url("https://dl.bintray.com/sksamuel/sbt-plugins/"))
addSbtPlugin("org.scoverage" % "sbt-scoverage" % "1.5.1")
addSbtPlugin("com.codacy" % "sbt-codacy-coverage" % "1.3.11")

