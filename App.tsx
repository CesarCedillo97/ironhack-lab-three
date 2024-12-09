import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { DefaultPricingStrategy } from "./src/components/DefaultPricingStrategy";
import { ConsolePaymentProcessor } from "./src/components/ConsolePaymentProcessor";
import { ShoppingCart } from "./src/components/ShoppingCart";

const App = () => {
  const pricingStrategy = new DefaultPricingStrategy();
  const paymentProcessor = new ConsolePaymentProcessor();
  const cart = new ShoppingCart(pricingStrategy, paymentProcessor);

  cart.addItem("Apple", 1.5, 3);
  cart.addItem("Banana", 0.8, 5);

  const handleCheckout = () => {
    console.log("Total Price:", cart.calculateTotal());
    cart.checkout();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default App;
