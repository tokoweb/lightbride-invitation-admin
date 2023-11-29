#!/bin/bash

echo "Running on Branch $1"

echo "Fetch latest code on branch $1"
git pull origin $1

echo "Instaling package"

yarn install

echo "Build Production"

yarn run build

echo "restart apps"

if pm2 show admin.lightbride.com &>/dev/null; then
    pm2 restart admin.lightbride.com
else
    pm2 start yarn --name "admin.lightbride.com" -- start -- -p 3000
    pm2 save
fi
