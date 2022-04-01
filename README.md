# Foloosi React Native SDK Integration

## Step - 1 - Install dependency with npm package

`$ npm install react-native-foloosi --save`

## Step - 2 - Usuage

```javascript
import Foloosi from "react-native-foloosi";

// To initialize the SDK add the below line of code with the public key you retrieved from foloosi merchant panel. If you don't have a public key create new one.

Foloosi.initSDK("YOUR_KEY");
```

## Step - 3 - Create Order Data Object with necessary inputs

You need to give the order id, title, description, currency code, order amount and customer details like name, email, mobile number. while creating order in Foloosi.

```javascript
// Customer field is optional.
var orderData = {
  orderAmount: 1.0, // in double format ##,###.##
  customColor: "#AB34FD", // make payment page loading color as app color. // optional
  orderId: "orderId", // unique order id
  orderDescription: "order description", // any description. // optional
  currencyCode: "INR",
  customerUniqueReference: "customer reference id", // optional
  country: "India", // mandatory for ios
  postalCode: "6200082", //optional
  state: "Test State", //optional
  customer: {
    name: "Test",
    email: "email@gmail.com",
    mobile: "9876543210",
    address: "Test Adddddress", // optional
    city: "Test City", // optional
  },
};
```

## Step - 4 - Make Transaction with Foloosi

a. Use the below line of code to make the payment with the order data you created in Step - 3

```javascript
Foloosi.makePayment(JSON.stringify(orderData), (response) => {
  let { success, message, transaction_id } = JSON.parse(response);
  //success - type boolean
  //message - type string
  //transaction_id - type string if success is true otherwise it's null
});
```

b. Use the below line of code to make the payment with the order data reference token

```javascript
Foloosi.makePaymentWithReferenceToken("REFERENCE_TOKEN", (response) => {
  let { success, message, transaction_id } = JSON.parse(response);
  //success - type boolean
  //message - type string
  //transaction_id - type string if success is true otherwise it's null
});
```
