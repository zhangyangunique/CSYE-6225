// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-2', accessKeyId : 'AKIARDHNC726HWMHG2UQ', secretAccessKey:'kyebOrfrtqjq3qOJC0EXMb9boY/wt78TgX6MuP3L'});
// Create SQS service object
const sqs = new AWS.SQS({apiVersion: '2012-11-05'});
// Replace with your accountid and the queue name you setup
const accountId = '075659148988';
const queueName = 'test';
const queueUrl = `https://sqs.us-east-2.amazonaws.com/${accountId}/${queueName}`;
// Setup the receiveMessage parameters
const params = {
  QueueUrl: queueUrl,
  MaxNumberOfMessages: 1,
  VisibilityTimeout: 0,
  WaitTimeSeconds: 0
};
sqs.receiveMessage(params, (err, data) => {
  if (err) {
    console.log(err, err.stack);
  } else {
    if (!data.Message) { 
      console.log('Nothing to process'); 
      return;
    }
    const orderData = JSON.parse(data.Messages[0].Body);
    console.log('Order received', orderData);
    // orderData is now an object that contains order_id and date properties
    // Lookup order data from data storage
    // Execute billing for order
    // Update data storage
    // Now we must delete the message so we don't handle it again
  }                                                                                                                                              });