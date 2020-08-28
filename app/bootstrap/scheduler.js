const { scheduledJobs } = require("../scheduler");
const { addJob } = require("express-quickstart-package").scheduler;

for (const jobName in scheduledJobs) {
  const { interval, job } = scheduledJobs[jobName];
  addJob(jobName, interval, job);
}
