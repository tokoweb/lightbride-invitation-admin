#!/bin/bash

echo "Running on Branch $1"

echo "Fetch latest code on branch $1"
git pull origin $1

echo "Instaling package"

yarn install

echo "Build Production"

yarn run build

echo "restart apps"

pm2 restart admin.lightbride.com
