import React, { useState } from "react";
import { StyleSheet, ImageBackground, View, Text } from "react-native";
import Button from "react-native-button";
import Background from "./assets/background.png";

export default function App() {
  const [life, setLife] = useState(0)
  const [xp, setXp] = useState(0)

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Background}
        style={{ width: "100%", height: "100%" }}
        imageStyle={{ resizeMode: "stretch" }}
      >
        <View style={[styles.flexRow, { width: "100%" }]}>
          <View
            style={[
              styles.flexCol,
              { marginLeft: 80, alignItems: "flex-start" }
            ]}
          >
            <Button
              style={styles.button}
              onPress={() => setLife(life + 1)}
            >
              +
            </Button>
            <Button
              style={styles.button}
              onPress={() => setLife(life - 1)}
            >
              -
            </Button>
          </View>
          <View
            style={[
              styles.flexRow,
              { justifyContent: "space-around", marginRight: 18 }
            ]}
          >
            <Text style={[styles.number, { marginRight: 40 }]}>{life}</Text>
            <Text style={styles.number}>{xp}</Text>
          </View>
          <View
            style={[
              styles.flexCol,
              { marginRight: 80, alignItems: "flex-end" }
            ]}
          >
            <Button
              style={styles.button}
              onPress={() => setXp(xp + 1)}
            >
              +
            </Button>
            <Button
              style={styles.button}
              onPress={() => setXp(xp - 1)}
            >
              -
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "black",
    color: "white",
    fontSize: 36,
    height: 50,
    width: 50
  },
  number: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold"
  },
  flexCol: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-evenly"
  },
  flexRow: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
