const scheduledJobs = {
  "job-name": {
    interval: "1 * * * * *",
    job: require("./jobs/sample"),
  },
};

module.exports = {
  scheduledJobs,
};
