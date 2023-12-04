#!/bin/bash

echo "Running on Branch $1"

echo "Fetch latest code on branch $1"
git pull origin $1

echo "Instaling package"
$HOME/.nvm/versions/node/v20.10.0/bin/yarn install

echo "Build App And Restart"
$HOME/.nvm/versions/node/v20.10.0/bin/yarn deploy:prod

echo "Save PID"
pm2 save --force
