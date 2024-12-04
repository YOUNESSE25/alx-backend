/** Node Redis client publisher and subscriber */
import { createClient } from 'redis';

const ClientRedis = createClient();

ClientRedis.on('connect', function () {
    console.log('Redis client connected to the server');
});

ClientRedis.on('error', function (error) {
    console.log(`Redis client not connected to the server: ${error.message}`);
});

ClientRedis.subscribe('holberton school channel');

ClientRedis.on('message', function (channel, message) {
  console.log(`${message}`);
  if (message === 'KILL_SERVER') {
    ClientRedis.unsubscribe('holberton school channel');
    ClientRedis.end(true);
  }
});
