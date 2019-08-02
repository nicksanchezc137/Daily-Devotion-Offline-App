import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
   flex:1,
    height: 445,
    borderRadius: 5,
    backgroundColor: "#fff",
    margin: 20,
    borderColor: "#ddd",
    borderWidth: 1
  },
  day: {
    fontFamily: "OpenSans",
    fontSize: 20,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: 1.4,
    color: "#ffffff",
    marginTop: 12,
    marginLeft: 12,
    margin: 15
  },
  sub_container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    width: 253,
    height: 27,
    fontFamily: "OpenSans",
    fontSize: 20,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 27,
    letterSpacing: 0,
    textAlign: "center",
    color: "#4d4d4d",
    marginLeft: 12
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
