import { StatusBar } from "expo-status-bar";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ChildFeild from "./AllFeilds";
import { Check, Btn } from "./AllFeilds";

export default function ParentFeilds() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  function setUserState(ftxt) {
    setUserName(ftxt);
  }

  function setPassState(ftxt) {
    setPassword(ftxt);
  }
  function setRePassState(ftxt) {
    setRePassword(ftxt);
  }

  return (
    <View style={styles1.container}>
      <View style={styles1.head}>
        <Text style={styles1.headText}>Sign Up</Text>
      </View>
      <View>
        <ChildFeild
          val={userName}
          handleText={(txt) => {
            setUserState(txt);
          }}
          placeH={"e-mail"}
          eye={false}
        />
      </View>

      <View>
        <ChildFeild
          val={password}
          handleText={(txt) => {
            setPassState(txt);
          }}
          placeH={"password"}
          eye={true}
        />
      </View>
      <View>
        <ChildFeild
          val={rePassword}
          handleText={(txt) => {
            setRePassState(txt);
          }}
          placeH={"repeat password"}
          eye={true}
        />
      </View>
      <Check />
      <Btn />
      <View
        style={{ position: "absolute", bottom: 80, left: 70, color: "#d3d3d3" }}
      >
        <Text style={{ color: "#aacac7", fontSize:16 }}>All Rights Reserved by @Abdul Moiz Inc.</Text>
      </View>
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fd",
    // borderColor: "red",
    // borderWidth: 1,
    position: "relative",
  },
  head: {
    // backgroundColor: "orange",
    width: "100%",
    height: 80,
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  headText: {
    fontSize: 60,
    color: "#13c1c7",
    fontWeight: "bold",
    // fontFamily: "monospace",
    letterSpacing: 1,
  },
});

export { styles1 };
