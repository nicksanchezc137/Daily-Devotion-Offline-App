import { StyleSheet } from "react-native";
import metrics from "../../Themes/Metrics";

export default StyleSheet.create({
  container: {
   flex:1,
    height: 202,
    borderRadius: 5,
    backgroundColor: "#fff",
    margin: 20,
    borderColor: "#ddd",
    borderWidth: 1,
    width:metrics.deviceWidth-80
  },
  day: {
    fontFamily: "OpenSans",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#4d4d4d",
    marginTop:27,
    marginLeft:10
  },
  sub_container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontFamily: "OpenSans",
    fontSize: 36,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#000000",
    marginLeft:10
  },
  subtitle: {
    marginLeft: 12,
    fontFamily: "OpenSans",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "center",
    color: "#4d4d4d"
  }
});
