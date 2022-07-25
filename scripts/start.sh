argv=$*
# Start node server

echo '[::] Starting node server...'
nodemon --max-old-space-size=1024 ./bin/www
