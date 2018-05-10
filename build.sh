#!/bin/sh

if [ ! -d "node_modules/uswds/dist" ]; then
  npm run uswds-install && npm run uswds-build && \curl -sSL https://get.rvm.io | bash -s stable --auto-dotfiles && rvm install ruby-2.4.2 && rvm use ruby-2.4.2 --default 
fi
