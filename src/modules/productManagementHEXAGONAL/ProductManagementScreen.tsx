import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { InMemoryProductRepository } from "./infrastructure/InMemoryProductRepository";
import { ProductService } from "./application/ProductService";
import { Product } from "./domain/Product";

const ProductManagementScreen: React.FC = () => {
  const repository = new InMemoryProductRepository();
  const productService = new ProductService(repository);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const [products, setProducts] = useState(productService.getAllProducts());

  const addSampleProduct = () => {
    const newProductID = (products.length + 1).toString();
    const newProduct = new Product(
      newProductID,
      productName,
      parseFloat(productPrice),
      parseInt(productQuantity)
    );
    productService.addProduct(newProduct);
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
    setProductName("");
    setProductPrice("");
    setProductQuantity("");
  };

  return (
    <View>
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="Product Name"
          value={productName}
          onChangeText={setProductName}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Product Price"
          value={productPrice}
          onChangeText={setProductPrice}
          style={styles.textInput}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Product Quantity"
          value={productQuantity}
          onChangeText={setProductQuantity}
          style={styles.textInput}
          keyboardType="numeric"
        />
      </View>
      <Button title="Add Product" onPress={addSampleProduct} />
      <View style={styles.separator} />
      <Text>Products:</Text>
      {products.map((product) => (
        <Text key={product.id + new Date()}>
          {product.name} - ${product.price}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  inputcontainer: {
    height: 200,
    width: "100%",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    marginHorizontal: 5,
    width: "95%",
    margin: 10,
  },
});

export default ProductManagementScreen;
