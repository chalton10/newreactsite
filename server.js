const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Webhook secret provided by WooCommerce
const webhookSecret = 'W6$E.cO/<(isaZ6#:iHJM8%%4Swp3@$JZhk_J;Q]V+eXwJt.rr';

// Define a route to handle incoming webhook payloads for all HTTP methods
app.all('/webhook', (req, res) => {
  if (req.method === 'POST' || req.method === 'GET') {
    if (req.method === 'POST') {
      // Verify signature for POST requests
      const signature = req.headers['x-wc-webhook-signature'];
      const payload = JSON.stringify(req.body);
      const calculatedSignature = crypto.createHmac('sha256', webhookSecret).update(payload).digest('base64');

      if (signature !== calculatedSignature) {
        console.error('Invalid webhook signature');
        return res.sendStatus(401); // Respond with a 401 Unauthorized status
      }
    }

    console.log(`Received ${req.method} webhook payload:`, req.body);
    return res.sendStatus(200); // Respond with a 200 OK status
  }

  return res.sendStatus(405); // Respond with a 405 Method Not Allowed status
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});