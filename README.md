
# Send Whatsapp Messages using Twilio

This is an RESTful API build with Node, Express and Twilio to send the Whatsapp Messages.
We can send following types of messages using this API-

- Text Message
- Image Message
- Document Message
- Video Message

## Main technologies and framework used

- Node.js
- Express
- Twilio


## Requirements

To run this app in your machine Node.js should be installed in your system.


## Installation

Follow the steps below to run the app in your system

1. Clone the repository
`https://github.com/afzalimamias/twilio-whatsapp-service.git`

2. Open the project in VS code or any other code editor.
3. Run `npm i` to download all the dependencies
4. Create a `.env` file in the root directory and add all the values present in `.env.example` file.
5. Run command `npm start` to run the code.

## API Endpoints

- `/api/v1/wp-message/send-message` (Method POST)
- This endpoint is of type `POST` and it takes following parameter in the body to send the message
- `"messageFrom": "<REPLACEC_WITH_YOUR_SANDBOX_FROM_NUMBER>"`,
- `"messageTo": "<REPLACEC_WITH_RECEIVER_WHATSAPP_NUMBER>"`,
- `"messageData": "<REPLACE_WITH_YOUR_TEXT_MESSAGE>"`,
- `"mediaUrl":"<REPLACE WITH YOUR MEDIA URL WITH VALID EXTENSION>"` `//EX-https://example.com/image1.png`
