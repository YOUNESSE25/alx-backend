/** Node Redis client and advanced operations */
import { promisify } from 'util';
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

const get = promisify(Client.get).bind(Client);

async function displaySchoolValue(schoolName) {
  const result = await get(schoolName).catch((error) => {
    if (error) {
      console.log(error);
      throw error;
    }
  });
  console.log(result);
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
