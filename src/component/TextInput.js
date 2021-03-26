import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextInputComponent = ({
  label,
  errorMessage,
  keyboardType,
  onChangeText,
  ref,
  props
}) => {
  return (
    <View style={styles.inputWrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, { borderColor: errorMessage ? "red" : "#ddd" }]}
        keyboardType={keyboardType ? keyboardType : "default"}
        placeholder={label}
        returnKeyType="next"
        placeholderTextColor="#555"
        onChangeText={onChangeText}
        ref={ref}
        {...props}
      />
      {errorMessage && <Text style={{ color: "red" }}>{errorMessage}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    marginBottom: 7,
    color: "#555",
    fontSize: 13,
    textTransform: "capitalize"
  },
  input: {
    height: 45,
    borderColor: "#ddd",
    borderWidth: 1,
    paddingLeft: 15,
    fontSize: 13
  },
  inputWrapper: {
    marginBottom: 15
  }
});
export default TextInputComponent;
