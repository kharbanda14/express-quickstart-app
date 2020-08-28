const { scheduledJobs } = require("../scheduler");
const { addJob } = require("express-quickstart-framework").scheduler;

for (const jobName in scheduledJobs) {
  const { interval, job } = scheduledJobs[jobName];
  addJob(jobName, interval, job);
}
