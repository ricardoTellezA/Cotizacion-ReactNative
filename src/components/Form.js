import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../utils/colors";

const Form = ({ setCapital, setInteres, setMonth }) => {

  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInput}>
        <TextInput
          placeholder="Cantidad a pedir"
          keyboardType="numeric"
          style={styles.input}
          onChange={e => setCapital(e.nativeEvent.text)}
        />
        <TextInput placeholder="Interes %" keyboardType="numeric"
          style={[styles.input, styles.inputPercent]}
          onChange={e => setInteres(e.nativeEvent.text)}
           />
      </View>
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={value => setMonth(value)}
        placeholder={{
          label: "Meses",
          value: null,
        }}
        items={[
          { label: '3 meses', value: 3 },
          { label: '6 meses', value: 6 },
          { label: '12 meses', value: 12 },
          { label: '24 meses', value: 24 },

        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewForm: {
    position: "absolute",
    bottom: -60,
    width: "85%",
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: "center",
  },
  viewInput: {
    flexDirection: "row",
  },
  input: {
    height: 50,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: "60%",
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: "#000",
    paddingHorizontal: 20,
  },
  inputPercent: {
    width: "40%",
    marginLeft: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    backgroundColor: "white",
    marginLeft: -5,
    marginRight: -5,

  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
    backgroundColor: "white",
  },
});
export default Form;
