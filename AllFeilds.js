import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ChildFeild = (props) => {
  const [eye, setEye] = useState("false");

  return (
    <View style={{ alignItems: "center", position: "relative", padding: 12 }}>
      <TextInput
        value={props.val}
        onChangeText={(ntxt) => {
          props.handleText(ntxt);
        }}
        autoCapitalize="none"
        maxLength={30}
        keyboardType="default"
        underlineColorAndroid="transparent"
        returnKeyType={"next"}
        placeholder={props.placeH}
        placeholderTextColor={"#d3d3d3"}
        autoCorrect={false}
        secureTextEntry={props.eye ? (!eye ? true : false) : false}
        style={[styles.first]}
      />

      {props.eye ? (
        <TouchableOpacity onPress={() => setEye(!eye)}>
          <FontAwesome
            name={eye ? "eye" : "eye-slash"}
            color={"#d3d3d3"}
            size={16}
            style={{ position: "absolute", bottom: 16, left: 110 }}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const Check = (props) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.check}>
      <View style={{ width: 20 }}>
        <Checkbox
          value={isChecked}
          onValueChange={(vl) => {
            setChecked(vl);
          }}
          color="#34b8bd"
        />
      </View>
      <View style={{ width: 125 }}>
        <Text style={{ fontSize: 20, fontWeight: "100", color: "lightgrey" }}>
          Remember me
        </Text>
      </View>
    </View>
  );
};

const Btn = () => {
  const [color, setColor] = useState("#13c1c7");

  return (
    <View style={{alignItems:"center", marginTop:30}}>
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: "#13c1c7",
            width: 300,
            height: 50,
            borderRadius: 25,
            alignItems:"center",
            justifyContent:"center",
            fontSize: 20,
            shadowColor: "black",
            elevation: 6,
          }}
        >
          <View>
            <Text style={{color:"white", fontFamily:"serif", fontSize:20}}>Sign up</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChildFeild;
export { Check, Btn };

const styles = StyleSheet.create({
  first: {
    fontSize: 20,
    paddingHorizontal: 30,
    paddingVertical: 12,
    width: 300,
    borderRadius: 25,
    backgroundColor: "#ffffff",
    shadowColor: "#369aba",
    elevation: 8,
  },
  check: {
    // backgroundColor: "lightgrey",
    display: "flex",
    width: 170,
    marginLeft: 35,
    marginTop: 20,
    // alignItems:"center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
