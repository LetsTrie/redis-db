const redis = require('redis');

const redisClient = redis.createClient({ host: 'localhost', port: 6379 });

// redis Server in ready
redisClient.on('ready', () => {
  console.log('Redis is ready');
});

// Some Error Occured in redis Server
redisClient.on('error', () => {
  console.log('Error in Redis');
});

redisClient.set('language', 'nodejs', (err, reply) => {
  if (err) console.log('error =:> ', err);
  else console.log('after store a data =:>', reply);
});

redisClient.get('language', (err, reply) => {
  if (err) console.log('error =:> ', err);
  else console.log('getting a data =:>', reply);
});

// Storing an Object
redisClient.hmset('tools', 'webserver', 'expressjs', 'database', 'mongoDB', 'devops', 'jenkins', (err, reply) => {
  if (err) console.log('error =:> ', err);
  else console.log('After setting an object =:>', reply);
});

// getting an Object
redisClient.hgetall('tools', (err, reply) => {
  if (err) console.log('error =:> ', err);
  else console.log('getting an object =:>', reply);
});

// Storing List
redisClient.rpush(['languages', 'angularjs', 'nodejs', 'go'], (err, reply) => {
  if (err) console.log('error =:> ', err);
  else console.log('after store a List =:>', reply);
});

// Storing Set
// It is not working...
redisClient.sadd(['devopstools', 'jenkins', 'codeship', 'jenkins'], (err, reply) => {
  if (err) console.log('error =:> ', err);
  else console.log('after store a Set =:>', reply);
});

redisClient.exists('language', (err, reply) => {
  if (!err) {
    console.log('Print the key', reply);
    if (reply) console.log('Key exists');
    else console.log("Does't exists");
  }
});

// redisClient.del('languages', (err, reply) => {
//   if (!err) {
//     if (reply) console.log('Key is deleted');
//     else console.log("Does't exists");
//   }
// });


module.exports = redisClient;
