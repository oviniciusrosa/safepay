import React from "react";
import * as S from "./Card.styles";
import { StyleSheet, View } from "react-native";

export function Card({ children }): React.ReactElement {
  return (
    <View
      style={
        (styles.container,
        [
          {
            backgroundColor: "#FFF",
            borderRadius: 8,
            padding: 16,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,

            elevation: 7,
          },
        ])
      }
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 16,
  },
});
