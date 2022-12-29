#!/bin/bash

sleep 40

cd /app/api
yarn install

cd /app/api
chmod +x /app/api/node_modules/.bin/nodemon

cd /app/api
yarn start
