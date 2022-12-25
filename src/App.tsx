import React, { Component, useState } from "react";
import {
  Button,
  TextInput,
  StyleSheet,
  Text,
  View,
  FlatList
} from "react-native";

const data = [
  {
    id: 1,
    name1: "Dolo1",
    description1: "dooooolllooo",
    price1: 80,
    name2: "Dolo2",
    description2: "doooo2",
    price2: 90
  },
  { id: 2, name1: "Dolo3", description1: "dooooo3", price1: 100 },
  {
    id: 3,
    name1: "Dolo4",
    desiption1: "doooo4 ",
    price1: 180,
    name2: "Dolo5",
    description2: "dooooo6",
    price2: 120
  },
  { id: 4, name1: "Dolo7", description1: "dooollo 7", price1: 200 },
  {
    id: 5,
    name1: "Dolo8",
    description1: "dooooo9",
    price1: 1300,
    name2: "Dolo10",
    description2: "doooo11",
    price2: 120
  }
];

const styles = StyleSheet.create({
  app: {
    width: "100%",
    backgroundColor: "green",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row"
  },
  twoColumn: {
    backgroundColor: "red",
    height: 30,
    borderWidth: 1,
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  oneColumn: {
    backgroundColor: "green",
    height: 30,
    borderWidth: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  flatList: {
    flexWrap: "wrap",
    backgroundColor: "blue",
    overflow: "visible",
    overlayColor: "green"
  }
});

class App extends Component {
  render() {
    return (
      <View>
        <FlatList
          style={styles.flatList}
          data={data}
          extraData={data}
          keyExtractor={(item) => JSON.stringify(item)}
          renderItem={({ item, index }) => {
            if (item.name2) {
              return (
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.twoColumn}>
                    <Text>{item.name1}</Text>
                  </View>
                  <View style={styles.twoColumn}>
                    <Text>{item.name2}</Text>
                  </View>
                </View>
              );
            } else {
              return (
                <View style={styles.oneColumn}>
                  <Text>{item.name1}</Text>
                </View>
              );
            }
          }}
        />
      </View>
    );
  }
}
export default App;
