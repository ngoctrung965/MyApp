import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [name, setName] = useState("");
  const [mssv, setMssv] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.form}>
          <Text style={styles.title}>Thông tin sinh viên</Text>

          <TextInput
            style={styles.input}
            placeholder="Họ và tên"
            value={name}
            onChangeText={setName}
          />
          {!name.trim() && (
            <Text style={styles.errorText}>Họ tên không được để trống</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Mã sinh viên"
            value={mssv}
            onChangeText={setMssv}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          {!email.trim() && (
            <Text style={styles.errorText}>Email không được để trống</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Số điện thoại"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  form: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});
