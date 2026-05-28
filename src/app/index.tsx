import { StyleSheet } from "react-native";
import LandingPage from "../../Components/landing-page";

export default function Index() {
  return <LandingPage></LandingPage>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
