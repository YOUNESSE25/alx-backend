/** Node Redis client and basic operations */
import { createClient, print } from 'redis';

const Client = createClient();

Client.on('connect', function() {
  console.log('Redis client connected to the server');
});

Client.on('error', function (err) {
  console.log(`Redis client not connected to the server: ${err}`);
});

function setNewSchool(schoolName, value) {
  Client.set(schoolName, value, print);
};

function displaySchoolValue(schoolName) {
  Client.get(schoolName, function(error, result) {
    if (error) {
      console.log(error);
      throw error;
    }
    console.log(result);
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
