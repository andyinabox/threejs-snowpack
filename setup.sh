#!/bin/bash

DIRNAME=${PWD##*/}
TPL_DIRNAME="threejs-snowpack"

if [ "$DIRNAME" = "$TPL_DIRNAME" ]; then
  echo "WARNING: the current project directory is named '$TPL_DIRNAME'."
  echo "To use this template you should copy it to a new directory first."
  echo "See README.md for more info."
  exit 0
fi

# rm -rf .git
# rm -rf node_modules
# rm -rf build
# rm package-lock.json

# npm init
# npm install

# rm ./setup.sh
