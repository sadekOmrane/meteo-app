import { StyleSheet, Text } from "react-native";
import { List } from "react-native-paper";
import React from "react";
export default function SearchListComponent({ loading, address, navigation }) {
  return (
    <>
      <List.Section style={styles.list}>
        {address?.map((item, index) => (
          <List.Item
            key={index}
            style={styles.listItem}
            title={item?.properties?.name}
            titleStyle={styles.listItemTitle}
            description={item?.properties?.label || ""}
            descriptionStyle={styles.listItemDesc}
            onPress={() => {
              navigation.push("home", {
                address: item,
              });
            }}
            left={(props) => <List.Icon {...props} icon="city" color="white" />}
            right={(props) => (
              <List.Icon {...props} icon="chevron-right" color="white" />
            )}
          />
        ))}
      </List.Section>
      {loading ? (
        <Text style={styles.noDataTxt}>Loading...</Text>
      ) : null}
      {address.length == 0 && !loading ? (
        <Text style={styles.noDataTxt}>No data found !</Text>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 30,
  },
  listItem: {
    backgroundColor: "#08244F",
    borderRadius: 12,
    padding: 5,
    width: "100%",
    marginBottom: 10,
  },
  listItemTitle: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  listItemDesc: {
    color: "white",
    fontSize: 12,
  },
  noDataTxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "meduim",
    marginTop: 30,
  },
});
