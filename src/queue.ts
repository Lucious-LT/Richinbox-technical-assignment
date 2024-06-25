import { Queue } from 'bullmq';

// Create a new queue
const myQueue = new Queue('my-queue', {
  connection: {
    host: 'localhost',
    port: 6379
  }
});

// Add a job to the queue
async function addJob() {
  await myQueue.add('my-job', { foo: 'bar' });
  console.log('Job added');
}

addJob().catch((error) => console.error('Error adding job:', error));
