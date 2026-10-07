import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [sswd, setSswd] = useState("");
  const [ob, setOb] = useState("");
  const [mobileApps, setMobileApps] = useState("");
  const [digitalMarketing, setDigitalMarketing] = useState("");
  const [ooad, setOoad] = useState("");
  const [financialManagement, setFinancialManagement] = useState("");

  function clickMe() {
    let totalGradeScore =
    (sswd * 5) +
    (ob * 5) +
    (mobileApps * 5) +
    (digitalMarketing * 5) +
    (ooad * 5) +
    (financialManagement * 5);

    let GPA = totalGradeScore / 30;

    alert("Your GPA is: " + GPA);
  
  }
  const styles = StyleSheet.create({
  container: {
    marginLeft: "5%",
    marginRight: "5%",
    padding: "5%"
  },
  row: {
    flexDirection: "row",
    marginLeft: "5%",
    marginRight: "5%",
    padding: "3%"
  },
  label: {
    marginRight: "5%",
    padding: "2%",
    width: "40%"
  },
  textInput: {
    marginLeft: "5%",
    padding: "2%",
    width: "40%",
    borderWidth: 1
  }

});

  


return (
  
  <View style={styles.container}>

    <View style={styles.row}>
      <Text style={styles.label}>SSWD:</Text>

      <TextInput
        style={styles.textInput}
        value={sswd}
        onChangeText={setSswd}
        keyboardType="numeric"
      />
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>OB:</Text>

      <TextInput
        style={styles.textInput}
        value={ob}
        onChangeText={setOb}
        keyboardType="numeric"
      />
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Mobile Apps:</Text>

      <TextInput
        style={styles.textInput}
        value={mobileApps}
        onChangeText={setMobileApps}
        keyboardType="numeric"
      />
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Digital Marketing:</Text>

      <TextInput
        style={styles.textInput}
        value={digitalMarketing}
        onChangeText={setDigitalMarketing}
        keyboardType="numeric"
      />
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>OOAD:</Text>

      <TextInput
        style={styles.textInput}
        value={ooad}
        onChangeText={setOoad}
        keyboardType="numeric"
      />
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Financial Management:</Text>

      <TextInput
        style={styles.textInput}
        value={financialManagement}
        onChangeText={setFinancialManagement}
        keyboardType="numeric"
      />
    </View>

    <Button
      title="Calculate GPA"
      onPress={clickMe}
    />

  </View>
);
}
