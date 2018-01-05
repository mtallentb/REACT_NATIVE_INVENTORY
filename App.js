import React from 'react';
import { StyleSheet, Text, View, Button, AlertIOS, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  showSellProducts = () => {
    AlertIOS.alert("Sell Products?");
  };

  showAddToStock = () => {
    AlertIOS.alert("Add To Stock?");
  };

  showInventory = () => {
    AlertIOS.alert("View Inventory?");
  };

  showCreateProduct = () => {
    AlertIOS.alert("Create a Product?");
  };

  showOrderHistory = () => {
    AlertIOS.alert("View Order History?");
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity title="Sell Products" onPress={this.showSellProducts} style={styles.sellProductsBtn}><Text style={{ color: 'white', fontSize: 40 }}>Sell Products</Text></TouchableOpacity>
        <TouchableOpacity title="Add To Stock" onPress={this.showAddToStock} style={styles.addToStockBtn}><Text style={{ color: 'white', fontSize: 40 }}>Add To Stock</Text></TouchableOpacity>
        <TouchableOpacity title="View Inventory" onPress={this.showInventory} style={styles.viewInventoryBtn}><Text style={{ color: 'white', fontSize: 40 }}>View Inventory</Text></TouchableOpacity>
        <TouchableOpacity title="Create Product" onPress={this.showCreateProduct} style={styles.createProductBtn}><Text style={{ color: 'white', fontSize: 40 }}>Create Product</Text></TouchableOpacity>
        <TouchableOpacity title="Order History" onPress={this.showOrderHistory} style={styles.orderHistoryBtn}><Text style={{ color: 'white', fontSize: 40 }}>Order History</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sellProductsBtn: {
    backgroundColor: '#007bff',
    padding: 40,
    margin: 10,
    borderRadius: 10
  },
  addToStockBtn: {
    backgroundColor: '#dc3545',
    padding: 40,
    margin: 10,
    borderRadius: 10
  },
  viewInventoryBtn: {
    backgroundColor: '#17a2b8',
    padding: 40,
    margin: 10,
    borderRadius: 10
  },
  createProductBtn: {
    backgroundColor: '#28a745',
    padding: 40,
    margin: 10,
    borderRadius: 10
  },
  orderHistoryBtn: {
    backgroundColor: '#ffc107',
    padding: 40,
    margin: 10,
    borderRadius: 10
  }
});
