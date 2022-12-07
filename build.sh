#!/bin/sh

if [ ! -d "node_modules/@uswds/uswds/dist" ]; then
  npm explore uswds -- npm run federalist
fi
