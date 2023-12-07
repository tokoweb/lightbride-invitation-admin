#!/bin/bash

echo "Running on Branch $1"

echo "Fetch latest code on branch $1"
git pull origin $1

echo "set up npm env"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
nvm use 20

echo "Instaling package"
yarn install

echo "Build App"
yarn deploy:prod

echo "restart PID"
pm2 restart admin.lightbride.com

echo "Save PID"
pm2 save --force
