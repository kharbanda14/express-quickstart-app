# Queues
- [Queues](#queues)
  - [Usage](#usage)
    - [Available methods](#available-methods)
    - [Creating Queue](#creating-queue)
    - [Get Registered Queue](#get-registered-queue)
  

The application queues is configured with [bull](https://www.npmjs.com/package/bull).

It is required to have redis server running to make it work, use the `REDIS_URL` for configuring.

## Usage

### Available methods
```javascript
createQueue(queueName: string, job: Function, options?: object): Bull.Queue<any>;
getQueue(queueName: string): Bull.Queue<any>;
```

### Creating Queue
```javascript
const { queue } = require("express-quickstart-framework");

queue.createQueue("sample-queue", async (job, done) => {
  // perform operations
  done(); // completes the operation
});
```

### Get Registered Queue

The following returns bull Queue instance thus, therefor you have access to all the methods it has, check Queue api for available methods

```javascript
const { queue } = require("express-quickstart-framework");

queue.getQueue("sample-queue");
```