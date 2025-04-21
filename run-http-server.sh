#!/bin/sh

PORT=9999

echo "starting the http server with npx at port:$PORT"

npx http-server . -o -p $PORT > .http-server.log 2>&1 &

exit 0
