import React from "react";
import { View } from "react-native";

// function Row({ children }) {
//   <View style={{ flexDirection: "row" }}>{children}</View>;
// }
// export default Row;

export default ({ children }) => (
  <View style={{ flexDirection: "row" }}>{children}</View>
);
