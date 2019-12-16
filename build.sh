#!/bin/sh

if [ ! -d "node_modules/uswds/dist" ]; then
  npm run jekyll-install && npm run uswds-build
fi
