import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const landingpage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/pen.png")}
          style={styles.image}
        />

        <Image
          source={require("../assets/images/profile.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.logo}>
        <Image
          source={require("../assets/images/transparentLogo.png")}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.ui}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.leftGroup}>
            <Image
              source={require("../assets/images/transparentG.png")}
              style={styles.gLogo}
            />

            <Text style={styles.text}>Search Google or type URL</Text>
          </View>

          <View style={styles.rightGroup}>
            <Image
              source={require("../assets/images/mic.png")}
              style={styles.mlogo}
            />

            <Text>|</Text>

            <Image
              source={require("../assets/images/camera.png")}
              style={styles.clogo}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.mode}>
          <TouchableOpacity style={styles.aiButton}>
            <Image
              source={require("../assets/images/Search.png")}
              style={styles.clogo}
            />

            <Text style={styles.text}>AI Mode</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.incogButton}>
            <Image
              source={require("../assets/images/Incognito.png")}
              style={styles.clogo}
            />
            <Text style={styles.text}>Incognito</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default landingpage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 50,
  },

  image: {
    width: 40,
    height: 40,
  },

  header: {
    flexDirection: "row",
    height: 30,
    justifyContent: "space-between",

    alignItems: "center",
  },

  logo: {
    paddingTop: 20,
    alignItems: "center",
  },

  logoImage: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },

  ui: {
    paddingRight: 90,
    paddingLeft: 90,
    alignItems: "center",
  },

  button: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 2,
    width: 500,
    height: 50,
    backgroundColor: "#727272",
    borderRadius: 30,
    alignItems: "center",
    padding: 5,
    justifyContent: "space-between",
  },

  leftGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },

  rightGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
  },

  gLogo: {
    width: 20,
    height: 20,
    margin: 10,
  },

  text: {
    color: "white",
    fontSize: 15,
  },

  mlogo: {
    width: 35,
    height: 40,
    paddingLeft: 10,
    resizeMode: "contain",
  },

  clogo: {
    width: 25,
    height: 20,
    resizeMode: "contain",
    paddingRight: 10,
    paddingLeft: 30,
  },

  mode: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  aiButton: {
    flexDirection: "row",
    marginLeft: 5,
    marginTop: 10,
    backgroundColor: "#727272",
    borderRadius: 30,
    alignItems: "center",
    width: 200,
    height: 40,
    padding: 5,
  },

  incogButton: {
    flexDirection: "row",
    marginLeft: 5,
    marginTop: 10,
    backgroundColor: "#727272",
    borderRadius: 30,
    alignItems: "center",
    width: 200,
    height: 40,
    padding: 5,
  },
});
