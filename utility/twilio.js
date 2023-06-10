// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken, {
  username: accountSid,
});

const sampleText =
  "Hello this is Joel from My E-Guardian App. I am sending you this message to let you know that your loved one has left the house. !!! MEG SMS DEMO TEST !!!";
async function sendText(message, from, to) {
  // const coords = localStorage.getItem("checkItems");
  await client.messages
    .create({
      body: message,
      from: from,
      to: to,
    })
    .then((message) => console.log(message));
}

sendText(
  "Hey this is just a Saturday",
  process.env.TWILIO_FROM_NUMBER,
  process.env.TWILIO_TO_NUMBER
);
