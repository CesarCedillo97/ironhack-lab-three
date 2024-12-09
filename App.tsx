import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./src/modules/loginMVP/views/LoginScreen";
import ProductCatalogScreen from "./src/modules/productCatalogMVVM/view/ProductCatalogScreen";
import ProductManagementScreen from "./src/modules/productManagementHEXAGONAL/ProductManagementScreen";
import ShoppingCartScreen from "./src/modules/shoppingCartSOLID/ShoppinCart";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login">
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="login" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Prdct Mngr"
          component={ProductManagementScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="description" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Product Catalog"
          component={ProductCatalogScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="add" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Shopping Cart"
          component={ShoppingCartScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="shopping-cart" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
