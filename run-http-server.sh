#!/bin/sh

PORT=9999

echo "starting the http server with npx at port:$PORT"

npx http-server . -o -p $PORT

exit 0
