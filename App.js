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
    let totalGradeScore = (sswd * 5) + (ob * 5);

    let GPA = totalGradeScore / 10;

    alert("Your GPA is: " + GPA);
  
  }

}

return (
  <View>

    <View>
      <Text>SSWD:</Text>
      <TextInput
        value={sswd}
        onChangeText={setSswd}
        keyboardType="numeric"
      />
    </View>

    <View>
      <Text>OB:</Text>
      <TextInput
        value={ob}
        onChangeText={setOb}
        keyboardType="numeric"
      />
    </View>

    <Button
      title="Calculate GPA"
      onPress={clickMe}
    />

  </View>
);
