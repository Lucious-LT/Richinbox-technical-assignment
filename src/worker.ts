import { Worker, Job } from 'bullmq';

// Define a worker to process jobs
const worker = new Worker('my-queue', async (job: Job) => {
  console.log('Processing job:', job.name, job.data);
  // Perform some task
}, {
  connection: {
    host: 'localhost',
    port: 6379
  }
});

worker.on('completed', (job: Job) => {
  if (job) {
    console.log(`Job with id ${job.id} has been completed`);
  }
});

worker.on('failed', (job: Job | undefined, err: Error) => {
  if (job) {
    console.error(`Job with id ${job.id} has failed with error ${err.message}`);
  } else {
    console.error(`A job has failed but the job instance is undefined. Error: ${err.message}`);
  }
});
