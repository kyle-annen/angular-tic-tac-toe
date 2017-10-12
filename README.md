# Angulartictactoe 
[![Build Status](https://travis-ci.org/kyle-annen/angular-tic-tac-toe.svg?branch=master)](https://travis-ci.org/kyle-annen/angular-tic-tac-toe)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/f479cbd74c52476193e0a74a54fd4b3a)](https://www.codacy.com/app/kyle-annen/angular-tic-tac-toe?utm_source=github.com&utm_medium=referral&utm_content=kyle-annen/angular-tic-tac-toe&utm_campaign=Badge_Coverage)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f479cbd74c52476193e0a74a54fd4b3a)](https://www.codacy.com/app/kyle-annen/angular-tic-tac-toe?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kyle-annen/angular-tic-tac-toe&amp;utm_campaign=Badge_Grade)

A TicTacToe game written in Angular 2 which interfaces with a JSON TicTacToe API, and is served by a Java Http Server written by me. This is a project for my apprenticeship with 8thLight.


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

