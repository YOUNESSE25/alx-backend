/** Writing the test for job creation */
import { describe, it, before, after, afterEach } from 'mocha';
import { createQueue } from 'kue';
import { expect } from 'chai';

import createPushNotificationsJobs from './8-job.js';

const Queue = createQueue();

describe('Test createPushNotificatinsJobs function', function() {
  before(function () {
    Queue.testMode.enter();
  });

  afterEach(function () {
    Queue.testMode.clear();
  });

  after(function () {
    Queue.testMode.exit();
  });

  it('display an error message if jobs is not an array', function() {
    expect(() => createPushNotificationsJobs('job', Queue)).to.throw(Error, 'Jobs is not an array');
  });

  it('Test whether jobs are created', function() {
    const jobs = [
      {
        phoneNumber: '4153518780',
        message: 'This is the code 1234 to verify your account'
      },
      {
        phoneNumber: '4153518781',
        message: 'This is the code 4562 to verify your account'
      },
    ];

    createPushNotificationsJobs(jobs, Queue);

    expect(Queue.testMode.jobs.length).to.equal(2);

    expect(Queue.testMode.jobs[0].type).to.equal('push_notification_code_3');
    expect(Queue.testMode.jobs[0].data).to.eql(jobs[0]);

    expect(Queue.testMode.jobs[1].type).to.equal('push_notification_code_3');
    expect(Queue.testMode.jobs[1].data).to.eql(jobs[1]);
  });
});
