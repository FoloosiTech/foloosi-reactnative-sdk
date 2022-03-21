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

You need to give the Order ID, Custom Color for toolbars, Customer Details. Customer Details is required only if you did not give while creating order in Foloosi.

```javascript
// Customer field is optional.
var orderData = {
  orderAmount: "1", // in double format ##,###.##
  customColor: "#AB34FD", // make payment page loading color as app color.
  orderId: "orderId", // unique order id
  orderDescription: "order description", // any description.
  currencyCode: "INR",
  customerUniqueReference: "customer reference id",
  customer: {
    name: "name",
    email: "email@gmail.com",
    mobile: "9876543210",
  },
};

Foloosi.makePayment(JSON.stringify(orderData), (response) => {
  let { success, message, transaction_id } = JSON.parse(response);

  //success - type boolean
  //message - type string
  //transaction_id - type string if success is true otherwise it's null
});
```
