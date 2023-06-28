#!/bin/sh
echo "Iniciando a aplicação..."

npm install
nohup npm run bd > bd.out 2>&1 &
npm run dev
