#!/bin/bash

DIRNAME=${PWD##*/}
TPL_DIRNAME="threejs-snowpack"

if [ "$DIRNAME" = "$TPL_DIRNAME" ]; then
  echo "WARNING: the current project directory is named '$TPL_DIRNAME'."
  echo "To use this template you should copy it to a new directory first."
  echo "See README.md for more info."
  exit 0
fi

echo "--> cleaning up and removing git repository"
rm -rf .git
rm -rf node_modules
rm -rf build
rm package-lock.json

echo "--> running npm init. don't forget to rename your project!"
npm init

echo "--> installing dependencies"
npm install

echo "--> self-destructing"
rm ./setup.sh

echo "--> done!"