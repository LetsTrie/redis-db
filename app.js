// sudo apt-get install redis-server
// redis-server

// (1) Creating Server TCP listening socket *:6379: bind: Address already in use
// Solution:
// sudo service redis-server stop
// redis-server

// redis-cli (write 'PING', will return 'PONG')
// sudo npm i redis

const express = require('express');

const app = express();
require('./app.redis');

app.listen(3234, () => console.log('Server is Listening !!!!'));
