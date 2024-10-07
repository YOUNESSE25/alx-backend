/** Node Redis client and advanced operations */
import { createClient, print } from 'redis';

const ClientRedis = createClient();

ClientRedis.on('connect', function() {
  console.log('Redis client connected to the server');
});

ClientRedis.on('error', function(error) {
  console.log(`Redis client not connected to the server: ${error}`);
});

ClientRedis.hset('HolbertonSchools', 'Portland', '50', print);
ClientRedis.hset('HolbertonSchools', 'Seattle', '80', print);
ClientRedis.hset('HolbertonSchools', 'New York', '20', print);
ClientRedis.hset('HolbertonSchools', 'Bogota', '20', print);
ClientRedis.hset('HolbertonSchools', 'Cali', '40', print);
ClientRedis.hset('HolbertonSchools', 'Paris', '2', print);

ClientRedis.hgetall('HolbertonSchools', function (error, result) {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log(result);
});
