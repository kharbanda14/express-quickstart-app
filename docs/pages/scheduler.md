# Scheduler

Scheduler wraps **[node-schedule](https://www.npmjs.com/package/node-schedule)**

## Methods
```javascript
scheduler;
addJob(name: any, interval: string | number | RecurrenceRule | RecurrenceSpecDateRange | RecurrenceSpecObjLit, callback: any): Job;
getJob(name: any): Job;
```

## Usage
```javascript

const { addJob } = require("express-quickstart-framework").scheduler;
addJob(jobName, interval, () => {
  // do something here
});
```