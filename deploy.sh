#!/bin/bash
ng build -prod
sbt assembly deployHeroku
