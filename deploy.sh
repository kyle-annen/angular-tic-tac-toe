#!/bin/bash
ng build -prod
sbt assembly deployHeroku
sbt makePom
cp target/angular*.pom pom.xml
mvn deploy
