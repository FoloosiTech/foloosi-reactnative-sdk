import React from "react";
import { View, Button } from "react-native";
import Foloosi from "react-native-foloosi";

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Pay Now"
        onPress={() => {
          console.log("[App] onPress");
          Foloosi.initSDK("YOUR_KEY");
          Foloosi.makePayment(
            JSON.stringify({
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
            }),
            (response) => {
              let { success, message, transaction_id } = JSON.parse(response);
              console.log({ success, message, transaction_id });
            }
          );
        }}
      ></Button>
    </View>
  );
};

export default App;
