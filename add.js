import React from "react";
import { Text, View } from "react-360";

export default class Test extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>aaaaaaaaaaaaa</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1200,
    height: 600,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    transform: [{ translateX: 20 }, { translateY: 10 }, { translateZ: 10 }]
  },
  panel2: {
    // Fill the entire surface
    width: 1200,
    height: 600,
    flexDirection: "row",
    backgroundColor: "#000000",
    transform: [{ translateX: 300 }, { translateY: 0 }]
  },

  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2,
    transform: [{ translateX: 20 }, { translateY: 10 }, { translateZ: 10 }]
  },
  greeting: {
    fontSize: 30
  },
  position: {
    width: 1000,
    height: 1000,
    backgroundColor: "#000000",
    transform: [
      { translateX: 10 },
      { translateY: 10 },
      { translateZ: 10 },
      { rotateX: 10 },
      { rotateY: 10 },
      { rotateZ: 10 }
    ]
  },
  gre: {
    fontSize: 30,
    transform: [{ rotateY: -10 }, { translateZ: -100 }, { translateY: 100 }]
  },
  position2: {
    width: 1000,
    height: 1000,
    backgroundColor: "#000000",
    transform: [{ translateX: -500 }, { translateY: 100 }, { translateZ: -800 }]
  },
  image: {
    padding: 100,
    width: 300,
    height: 300
  }
});
