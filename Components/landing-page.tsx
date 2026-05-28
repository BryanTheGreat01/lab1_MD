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

      <TouchableOpacity style={styles.button}>
        <Text>Text</Text>

        <Image
          source={require("../assets/images/transparentG.png")}
          style={styles.gLogo}
        />
      </TouchableOpacity>
    </View>
  );
};

export default landingpage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },

  image: {
    width: 40,
    height: 40,
  },

  header: {
    flexDirection: "row",
    height: 30,
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "center",
  },

  logo: {
    paddingTop: 20,
    alignItems: "center",
    width: "100%",
  },

  logoImage: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },

  button: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 2,
    width: 300,
    height: 40,
    backgroundColor: "#727272",
    borderRadius: 30,
    alignItems: "center",
  },

  gLogo: {
    width: 20,
    height: 20,
  },
});
