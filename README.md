# Angulartictactoe [![Build Status](https://travis-ci.org/kyle-annen/angular-tic-tac-toe.svg?branch=master)](https://travis-ci.org/kyle-annen/angular-tic-tac-toe)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `sbt test` to run the Scala and Java server tests.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


# Deployment to Heroku

Build the angular app with `ng build`.

Deploy the server and static app assets with `sbt assembly deployHeroku`.

# Deployment to Clojars

Build the fat jar: `sbt assembly`

Bump version in `build.sbt`

Build the pom with `sbt makePom`

Copy pom to root directory and rename: `cp target/angulartictactoe-X.X.pom pom.xml`

Deploy to clojars with maven: `mvn deploy -DskipTests`

(the -DskipTests is nessesary as maven does not know how to run JS and Scala tests, to run the tests, use `sbt test`)

