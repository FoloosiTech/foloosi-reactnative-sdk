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
