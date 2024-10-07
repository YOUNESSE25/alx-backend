/** Create the Job processor */
import { createQueue } from 'kue';

const Queue = createQueue();

function sendNotification(phoneNumber, message) {
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
};

Queue.process('push_notification_code', function(job, done) {
  sendNotification(job.data.phoneNumber, job.data.message);
  done();
});
