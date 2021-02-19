const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")('sk_test_51IMdcGI6QOsuJSvpbmGFeFHaf7wHLM495Wnxm8sfMuTk4yyU8YnXaTDONO7GZfRFSC9svVArvLudnGTPuXwPh4AB00thCswTVS')
//API


//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/',(request,response) => response.status(200).send('Hello World'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! ', total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


//Listen command
exports.api = functions.https.onRequest(app)