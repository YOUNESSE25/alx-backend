/** Create the Job creator */
import { createQueue } from 'kue';

const Queue = createQueue();

const notification = {
  'phoneNumber': '4153518780',
  'message': 'This is the code to verify your account'
}

const job = Queue.create('push_notification_code', notification).save(function (error) {
  if (!error) {
    console.log(`Notification job created: ${job.id}`);
  }
});

job.on('complete', function() {
    console.log('Notification job completed');
}).on('failed', function() {
    console.log('Notification job failed');
});
