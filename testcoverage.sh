#!/usr/bin/env bash
npm install
ng test e2e --single-run --code-coverage
open coverage/index.html
sbt jacoco
open target/jacoco/report/html/index.html


