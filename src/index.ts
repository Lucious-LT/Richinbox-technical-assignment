import express from 'express';
import { Queue, Worker } from 'bullmq';
import { QueueEvents } from 'bullmq';
import IORedis from 'ioredis';
import { OpenAI } from "openai";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();
const port = 3000;

// Redis connection

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
