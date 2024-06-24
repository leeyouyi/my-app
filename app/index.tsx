import { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Alert,
} from "react-native";

export default function Index() {
  const [text, onChangeText] = useState("");
  const [amount, setAmount] = useState("");
  const [period, setPeriod] = useState("");
  const [rate, setRate] = useState("");

  console.log(amount, period, rate);

  const handleCalculate = () => {};

  const handleClear = () => {
    setAmount("");
    setPeriod("");
    setRate("");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.div}>
        <Text>貸款金額</Text>
        <TextInput
          placeholder="請輸入貸款金額(萬)"
          style={styles.input}
          onChangeText={setAmount}
          value={amount}
        />
      </View>
      <View style={styles.div}>
        <Text>貸款期間</Text>
        <TextInput
          placeholder="請輸入貸款月份"
          style={styles.input}
          onChangeText={setPeriod}
          value={period}
        />
      </View>
      <View style={styles.div}>
        <Text>貸款利率</Text>
        <TextInput
          placeholder="請輸入貸款利率"
          style={styles.input}
          onChangeText={setRate}
          value={rate}
        />
      </View>
      <View style={styles.div}>
        <Button title="開始試算" onPress={handleCalculate} />
      </View>
      <View style={styles.div}>
        <Button title="清除資料" onPress={handleClear} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  div: {
    marginTop: 30,
  },
  input: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
  },
});
